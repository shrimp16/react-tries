export class PopUpController {
    constructor(state, setState) {
        this.setActive = setState;
        this.state = state;
    }

    showPopUp(){
        this.setActive(true);
    }

    hidePopUp(){
        this.setActive(false);
    }
}

export function PopUp(props) {
    if(props.controller.state){
        return (
            <div style={{padding: "2rem", border: "2px black solid"}}>
                <p onClick={() => props.controller.hidePopUp()}>X</p>
                <h1>This is a pop up!</h1>
                <p>Hehe!</p>
            </div>
        )
    }
}