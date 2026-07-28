/* =====================================================
   IL BATTESIMO DI GINEVRA
   rsvp.js
===================================================== */


document.addEventListener(
    "DOMContentLoaded",
    () => {


        const form =
        document.getElementById("rsvpForm");


        const rsvpSection =
        document.getElementById("rsvp");


        const thanksSection =
        document.getElementById("thanks");



        if (!form) return;



        form.addEventListener(
            "submit",
            (event) => {


                event.preventDefault();



                const data = {


                    nome:
                    document.getElementById(
                        "guestName"
                    ).value,


                    presenza:
                    document.getElementById(
                        "attendance"
                    ).value,


                    adulti:
                    document.getElementById(
                        "adults"
                    ).value,


                    bambini:
                    document.getElementById(
                        "children"
                    ).value,


                    allergie:
                    document.getElementById(
                        "notes"
                    ).value,


                    messaggio:
                    document.getElementById(
                        "message"
                    ).value


                };



                console.log(
                    "Dati invitato:",
                    data
                );



                /*
                Nel prossimo passaggio
                collegheremo qui
                l'invio email automatico.
                */



                rsvpSection.classList.add(
                    "hidden"
                );



                thanksSection.classList.remove(
                    "hidden"
                );


                thanksSection.classList.add(
                    "fade-in"
                );



                form.reset();



            }
        );



    }
);
