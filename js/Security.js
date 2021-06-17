class Security {

    constructor(){

        // Add code to create the input and button elements
        this.input1=createInput("");
        this.input1.attribute("placeholder","Your Answer");
        this.input2=createInput("");
        this.input2.attribute("placeholder","Your Answer");
        this.input3=createInput("");
        this.input3.attribute("placeholder","Your Answer");

        this.button1=createButton("Submit");
        this.button2=createButton("Submit");
        this.button3=createButton("Submit");
    }

    display(){
        this.input1.position(100,80);
        this.input2.position(700,180);
        this.input3.position(100,280);

        this.button1.position(150,110);
        this.button2.position(750,210);
        this.button3.position(150,310);
        
        // Add code to make the buttons function as expected
        this.button1.mousePressed(()=>{
            if(this.input1.value()==accessCode1){
                this.button1.hide();
                this.input1.hide();
                score++;
                if(score!==3){
                    correct.play();
                }
            }
        });
        this.button2.mousePressed(()=>{
            if(this.input2.value()==accessCode2){
                this.button2.hide();
                this.input2.hide();
                score++;
                if(score!==3){
                    correct.play();
                }
            }
        });
        this.button3.mousePressed(()=>{
            if(this.input3.value()==accessCode3){
                this.button3.hide();
                this.input3.hide();
                score++;
                if(score!==3){
                    correct.play();
                }
            }
        });
    }
}