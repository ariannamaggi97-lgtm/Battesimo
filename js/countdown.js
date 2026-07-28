/* =====================================================
   IL BATTESIMO DI GINEVRA
   countdown.js
===================================================== */


document.addEventListener(
    "DOMContentLoaded",
    () => {


        const countdown =
        document.getElementById("countdown");


        if(!countdown) return;



        const eventDate =
        new Date(
            "September 12, 2026 11:30:00"
        ).getTime();




        function updateCountdown(){


            const now =
            new Date().getTime();



            const distance =
            eventDate - now;



            if(distance <= 0){


                countdown.innerHTML =
                "Oggi è il grande giorno ❤️";


                return;

            }



            const days =
            Math.floor(
                distance /
                (1000 * 60 * 60 * 24)
            );



            const hours =
            Math.floor(
                (distance %
                (1000 * 60 * 60 * 24))
                /
                (1000 * 60 * 60)
            );



            const minutes =
            Math.floor(
                (distance %
                (1000 * 60 * 60))
                /
                (1000 * 60)
            );



            const seconds =
            Math.floor(
                (distance %
                (1000 * 60))
                /
                1000
            );



            countdown.innerHTML =

            `
            <div>
            Mancano
            <br><br>

            <strong>
            ${days}
            </strong>
            giorni

            <strong>
            ${hours}
            </strong>
            ore

            <strong>
            ${minutes}
            </strong>
            minuti

            </div>
            `;



        }



        updateCountdown();


        setInterval(
            updateCountdown,
            1000
        );



    }
);
