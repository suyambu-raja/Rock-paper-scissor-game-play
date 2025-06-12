
        var rock = document.querySelector(".rock")
        var paper = document.querySelector(".paper")
        var scissor = document.querySelector(".scissor")
        var win = document.querySelector(".win")
        var lose = document.querySelector(".lose")
        var tie = document.querySelector(".tie")
        var reset = document.querySelector(".reset")
        var autoPlay = document.querySelector('.auto-play')
        var stopPlay = document.querySelector('.stop')
        var score_board = document.querySelector('.score-board')
        var resetConformation = document.querySelector('.reset-conformation')
        var yesReset = document.querySelector('.yes-reset')
        var notReset = document.querySelector('.not-reset')
        var your_result = document.querySelector(".your-result")
        var your_choice = your_result.querySelectorAll("p")
        var computer_result = document.querySelector(".computer-result")
        var computer_choice = computer_result.querySelectorAll("p")
        let yesResetScore;

        var reSet = () => {
            score.win = 0
            score.loss = 0
            score.tie = 0
            updater()
            localStorage.removeItem('score')
        }

        yesResetScore = () => {
            resetConformation.style.display = 'none'
            score.win = 0
            score.loss = 0
            score.tie = 0
            updater()
            localStorage.removeItem('score')
        }

        yesReset.addEventListener('click', yesResetScore)

        notReset.addEventListener('click', () => {
            resetConformation.style.display = 'none'
        })
        reset.addEventListener("click", () => {
            resetConformation.style.display = 'block'
        })

        var score = JSON.parse(localStorage.getItem('score')) || {
            win: 0,
            loss: 0,
            tie: 0,
            scoreBoard: "",
            yourChoice: "",
            computerChoice: ""
        }
        updater()

        function updater() {
            win.textContent = score.win
            lose.textContent = score.loss
            tie.textContent = score.tie
            score_board.textContent = score.scoreBoard
        }

        function mine(fixed_one) {
            your_choice[0].style.display = "none"
            your_choice[1].style.display = "none"
            your_choice[2].style.display = "none"
            fixed_one.style.display = "block"

            storeYourChoice();
        }
        function show(fixed_one) {
            computer_choice[0].style.display = "none"
            computer_choice[1].style.display = "none"
            computer_choice[2].style.display = "none"
            fixed_one.style.display = "block"

            storeComputerChoice();
        }

        let storeYourChoice = () => {
            if (your_choice[0].style.display === "block") {
                score.yourChoice = "rock";

            }
            else if (your_choice[1].style.display === "block") {
                score.yourChoice = "paper";

            }
            else if (your_choice[2].style.display === "block") {
                score.yourChoice = "scissor";

            }

            localStorage.setItem('score', JSON.stringify(score));
        }

        let storeComputerChoice = () => {
            if (computer_choice[0].style.display === "block") {
                score.computerChoice = "rock";

            }
            else if (computer_choice[1].style.display === "block") {
                score.computerChoice = "paper";


            }
            else if (computer_choice[2].style.display === "block") {
                score.computerChoice = "scissor";

            }

            localStorage.setItem('score', JSON.stringify(score));
        }

        let storageChoice = () => {

            if (score.yourChoice === "rock") {
                your_choice[0].style.display = "block";
            }
            else if (score.yourChoice === "paper") {
                your_choice[1].style.display = "block";
            }
            else if (score.yourChoice === "scissor") {
                your_choice[2].style.display = "block";
            }

            if (score.computerChoice === "rock") {
                computer_choice[0].style.display = "block";
            }
            else if (score.computerChoice === "paper") {
                computer_choice[1].style.display = "block";
            }
            else if (score.computerChoice === "scissor") {
                computer_choice[2].style.display = "block";
            }
        }
        storageChoice();



        function bot_seletion() {
            var bot_hand = Math.random()
            var bot_ans = ""
            if (bot_hand >= 0 && bot_hand < 1 / 4) {
                bot_ans = "Rock"
            }
            else if (bot_hand >= 1 / 4 && bot_hand < 1 / 2) {
                bot_ans = "paper"
            }
            else if (bot_hand >= 1 / 2 && bot_hand <= 1) {
                bot_ans = "scissor"
            }
            return (bot_ans)
        }

        function bot2_seletion() {
            var bot2_hand = Math.random()
            var bot2_ans = ""
            if (bot2_hand >= 0 && bot2_hand < 1 / 4) {
                bot2_ans = "Rock"
            }
            else if (bot2_hand >= 1 / 4 && bot2_hand < 1 / 2) {
                bot2_ans = "paper"
            }
            else if (bot2_hand >= 1 / 2 && bot2_hand <= 1) {
                bot2_ans = "scissor"
            }
            return (bot2_ans)
        }

        var interval = ''

        autoPlay.addEventListener('click', () => {
            autoPlay.style.display = 'none'
            stopPlay.style.display = 'block'

            if (autoPlay.style.display === 'none') {
                interval = setInterval(() => {
                    bot2_ans = bot2_seletion()
                    bot_ans = bot_seletion()

                    if (bot2_ans === 'Rock') {
                        if (bot_ans === "Rock") {
                            score.tie += 1
                            show(computer_choice[0])
                            score.scoreBoard = 'Both Tie'
                        }
                        else if (bot_ans === "paper") {
                            score.loss += 1
                            show(computer_choice[1])
                            score.scoreBoard = 'You Lose'
                        }
                        else if (bot_ans === "scissor") {
                            score.win += 1
                            show(computer_choice[2])
                            score.scoreBoard = 'You Won'
                        }
                        mine(your_choice[0])

                    }

                    else if (bot2_ans === "paper") {
                        if (bot_ans === "Rock") {
                            score.win += 1
                            show(computer_choice[0])
                            score.scoreBoard = 'You Won'
                        }
                        else if (bot_ans === "paper") {
                            score.tie += 1
                            show(computer_choice[1])
                            score.scoreBoard = 'Both Tie'
                        }
                        else if (bot_ans === "scissor") {
                            score.loss += 1
                            show(computer_choice[2])
                            score.scoreBoard = 'You Lose'
                        }
                        mine(your_choice[1])

                    }

                    else {
                        if (bot_ans === "Rock") {
                            score.loss += 1
                            show(computer_choice[0])
                            score.scoreBoard = 'You Lose'
                        }
                        else if (bot_ans === "paper") {
                            score.win += 1
                            show(computer_choice[1])
                            score.scoreBoard = 'You Won'
                        }
                        else if (bot_ans === "scissor") {
                            score.tie += 1
                            show(computer_choice[2])
                            score.scoreBoard = 'Both Tie'
                        }
                        mine(your_choice[2])

                    }
                    updater()
                    localStorage.setItem('score', JSON.stringify(score))

                }, 3000)
            }
        })
        stopPlay.addEventListener('click', () => {
            autoPlay.style.display = 'block'
            stopPlay.style.display = 'none'
            clearInterval(interval)
            alert('Auto Play stoped')

        })

        var rockRock = () => {

            bot_ans = bot_seletion()

            if (bot_ans === "Rock") {
                score.tie += 1
                score.scoreBoard = 'Both Tie'
                show(computer_choice[0])
            }
            else if (bot_ans === "paper") {
                score.loss += 1
                score.scoreBoard = 'You Lose'
                show(computer_choice[1])
            }
            else if (bot_ans === "scissor") {
                score.win += 1
                score.scoreBoard = 'You Won'
                show(computer_choice[2])
            }
            mine(your_choice[0])
            updater()
            localStorage.setItem('score', JSON.stringify(score))

        }

        var paperPaper = () => {
            bot_ans = bot_seletion()

            if (bot_ans === "Rock") {
                score.win += 1
                score.scoreBoard = 'You Won'
                show(computer_choice[0])

            }
            else if (bot_ans === "paper") {
                score.tie += 1
                score.scoreBoard = 'Both Tie'
                show(computer_choice[1])

            }
            else if (bot_ans === "scissor") {
                score.loss += 1
                score.scoreBoard = 'You Lose'
                show(computer_choice[2])

            }
            mine(your_choice[1])
            updater()
            localStorage.setItem('score', JSON.stringify(score))

        }

        var scissorScissor = () => {
            bot_ans = bot_seletion()

            if (bot_ans === "Rock") {
                score.loss += 1
                score.scoreBoard = 'You Lose'
                show(computer_choice[0])

            }
            else if (bot_ans === "paper") {
                score.win += 1
                score.scoreBoard = 'You Won'
                show(computer_choice[1])

            }
            else if (bot_ans === "scissor") {
                score.tie += 1
                score.scoreBoard = 'Both Tie'
                show(computer_choice[2])

            }
            mine(your_choice[2])
            updater()
            localStorage.setItem('score', JSON.stringify(score))
        }

        rock.addEventListener("click", rockRock)

        paper.addEventListener("click", paperPaper)

        scissor.addEventListener("click", scissorScissor)

        document.body.addEventListener('keydown', (event) => {
            if (event.key === 'r') {
                rockRock()
            }
            else if (event.key === 'p') {
                paperPaper()
            }
            else if (event.key === 's') {
                scissorScissor()
            }
            else if (event.key === 'Backspace') {
                resetConformation.style.display = 'block'
            }
            else if (event.key === 'Enter') {
                yesResetScore()
            }
        })



