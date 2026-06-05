    // Initialize score from localStorage, or create default if it doesn't exist
        let score = JSON.parse(localStorage.getItem('score')) || {
            wins: 0,
            losses: 0,
            ties: 0
        };

        updateScoreElement(); 

        let isAutoPlaying = false;
        let intervalId; 
         
        // Makes the game auto play
        const autoPlayBtn = document.querySelector('.auto-play-button');
        autoPlayBtn.addEventListener('click', autoPlay);
        
        // Autoplay function  
        function autoPlay(){
            if(!isAutoPlaying){
              intervalId = setInterval(() => {
                const playerMove = pickComputerMove();
                playGame(playerMove);

            }, 1000);
            isAutoPlaying = true;

            } else {


                clearInterval(intervalId);
                isAutoPlaying = false;
                
            }

        }
         
        //Stop play button for making the game stop playing

        let stopPlayBtn = document.querySelector('.auto-play-button');
        
        function stopPlay(){
            if(stopPlayBtn.textContent === 'Auto play'){
                stopPlayBtn.textContent = 'Stop playing';

            }   
            else{
                stopPlayBtn.textContent = 'Auto play';

            }
        }
        
        stopPlayBtn.addEventListener('click', stopPlay);


        

        document.querySelector('.js-rock-button')
        .addEventListener('click', () => {
            playGame('rock');
        });

        document.querySelector('.js-paper-button')
        .addEventListener('click', () => {
            playGame('paper');
        });

        document.querySelector('.js-scissors-button')
        .addEventListener('click', () => {
            playGame('scissors');
        });

        document.body.addEventListener('keydown', (event) => {
            if(event.key === 'r'){
                playGame('rock');
            }else if(event.key === 'p'){
                playGame('paper');
            }else if(event.key === 's'){
                playGame('scissors');
            }else if(event.key === 'a'){
                autoPlay();
            }else if(event.key === 'Backspace'){
                resetScore();
            }
            
        });



        function playGame(playerMove){
            const computerMove = pickComputerMove();

            let result = '';
            // Scissor move logic if statements
            if(playerMove === 'scissors'){
                if(computerMove === 'rock'){
                    result = 'You lose';
                }
                else if(computerMove === 'paper'){
                    result = 'You win';
                }
                else if(computerMove === 'scissors'){
                    result = 'Tie';
                }

            // Paper move logic if statements
            } else if (playerMove === 'paper'){
                if(computerMove === 'rock'){
                    result = 'You win'
                }
                else if(computerMove === 'paper'){
                    result = 'Tie'
                }
                else if(computerMove === 'scissors'){
                    result = 'You lose'
                }

            // rock move logic if statements
            } else if(playerMove === 'rock'){
                if(computerMove === 'rock'){
                    result = 'Tie';
                }
                else if(computerMove === 'paper'){
                    result = 'You lose';
                }
                else if(computerMove === 'scissors'){
                    result = 'You win';
                }
            }

            //Score changing logic
            if(result === 'You win'){
                score.wins += 1; 
            }else if(result === 'You lose'){
                score.losses += 1;
            }else if(result === 'Tie'){
                score.ties += 1;
            }

            localStorage.setItem('score', JSON.stringify(score));

            updateScoreElement();

            document.querySelector('.js-result').innerHTML = result;

            document.querySelector('.js-moves').innerHTML = `You 
                <img src="Images/${playerMove}-emoji.png" class="move-icon">
                <img src="Images/${computerMove}-emoji.png " class="move-icon">
                Computer` //Updated this!

        
        }
        //Updates the score in the rps Game
        function updateScoreElement(){
            document.querySelector('.js-score')
            .innerHTML = ` Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;


        }
        
        // Computer move logic if-else statements
        function pickComputerMove(){
            const randomNumber = Math.floor(Math.random() * 3)
            let computerMove = '';

            if(randomNumber === 0){
                computerMove = 'rock';
            }
            else if(randomNumber === 1){
                computerMove = 'paper';
            }
            else{
                computerMove = 'scissors';
            }
            return computerMove;
        }

        let resetScoreBtn = document.querySelector('.reset-score-button');
        resetScoreBtn.addEventListener('click', resetScore);
         
        function resetScore(){
            score.wins = 0;
            score.losses = 0;
            score.ties = 0;
            localStorage.setItem('score', JSON.stringify(score));
            
        }