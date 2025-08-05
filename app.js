// its  string  of  inputdata
let string = '';
//  All buttons
let btn = document.querySelectorAll(".btn");

//creat array   from    buttons with    foreach 
Array.from(btn).forEach((butt) => {

    butt.addEventListener("click", (e) => {

        let input = document.querySelector(".numbers");

        if (e.target.innerHTML == "=") {
            try {

                string = eval(string).toFixed(5);
                document.querySelector(".numbers").value = string;
            }
            catch (err) {
                console.log(err)
                string = '';
                input.value = string;

            }
        }
        else if (e.target.innerHTML == 'AC') {

            let input = document.querySelector(".numbers");
            string = '';
            input.value = string;

        }
        else {



            string = string + e.target.innerHTML;
            input.value = string;
        }


    })

})




