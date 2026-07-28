/* =====================================================
   IL BATTESIMO DI GINEVRA
   main.js
===================================================== */


document.addEventListener(
    "DOMContentLoaded",
    () => {


        const envelope =
        document.getElementById("openEnvelope");


        const intro =
        document.getElementById("intro");


        const invitation =
        document.getElementById("invitation");


        const rsvpButton =
        document.getElementById("rsvpButton");


        const rsvp =
        document.getElementById("rsvp");



        /*
            APERTURA BUSTA
        */


        envelope.addEventListener(
            "click",
            () => {


                envelope.classList.add("open");


                setTimeout(
                    () => {


                        intro.classList.add(
                            "fade-out"
                        );


                    },
                    900
                );



                setTimeout(
                    () => {


                        intro.classList.add(
                            "hidden"
                        );


                        invitation.classList.remove(
                            "hidden"
                        );


                        invitation.classList.add(
                            "fade-in"
                        );


                    },
                    1500
                );


            }
        );





        /*
            PASSAGGIO A RSVP
        */


        if(rsvpButton){


            rsvpButton.addEventListener(
                "click",
                () => {


                    invitation.classList.add(
                        "hidden"
                    );


                    rsvp.classList.remove(
                        "hidden"
                    );


                    rsvp.classList.add(
                        "fade-in"
                    );


                    window.scrollTo(
                        0,
                        0
                    );


                }
            );


        }



    }
);
