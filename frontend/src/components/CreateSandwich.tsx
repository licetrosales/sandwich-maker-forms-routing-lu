
import {Sandwich} from "../model/Sandwich";


type CreateSandwichProps = {
    addSandwich: (description: Sandwich) => void
}




export default function CreateSandwich(props: CreateSandwichProps) {

    const emptySandwichPlaceholder: Sandwich = {
        id: "",
        name: "",
        patty: "",
        numberOfPatties: 0,
        grilled: false,
        extraWishes: ""
    }

    const [sandwich, setSandwich] = useState(emptySandwichPlaceholder)

    /*
    * TODO: Aufgabe 3 -> Erstelle eine handleSubmit(event: FormEvent<HTMLFormElement>) Funktion,
    *  die props.addSandwich aufruft und das neue Sandwich-Objekt als Parameter übergibt
    **/
    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault()
        props.addSandwich(sandwich)
        console.log("HandleSubmit", sandwich)
        setSandwich(emptySandwichPlaceholder)

    }
    /*
    * TODO: Aufgabe 2 -> Erstelle eine handleChange(event: ChangeEvent<HTMLInputElement>) Funktion,
    *  die Änderungen an der Form übernimmt und den Sandwich-State aktualisiert
    **/
function handleChange(event: ChangeEvent<HTMLInputElement>){
//props.addSandwich(sandwich)
    const nameOfTheInputThatChange = event.target.name;
    const inputValue = event.target.value;
    const fieldType = event.target. type;

    setSandwich(
        (prevSandwich) => ({
            ...prevSandwich,
            [event.target.name]:
                fieldType === "checkbox"
                    ? event.target.checked
            : event.target.value
        })
    )
}

    /*
    * TODO: Aufgabe 1 -> Erstelle eine <form> mit der man alle Daten eines Burgers angeben kann
    **/

    {/* TODO: onClick hier entfernen und props.addSandwich in handleSubmit verschieben */}


 return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>

                    Sandwich name:
                    <input
                    name = "name"
                    placeholder="Cheeseburger"
                    type = "text"
                    value = {sandwich.name}
                    onChange={handleChange}
                    />
                </label>

                <label>

                    Patty:
                    <input
                        name="patty"
                        placeholder="veggie"
                        type="text"
                        value={sandwich.patty}
                        onChange={handleChange}
                    />
                </label>

                <label>

                    Number of patties:
                    <input
                        name="numberOfPatties"
                        placeholder="1"
                        type="number"
                        value={sandwich.numberOfPatties}
                        onChange={handleChange}
                    />
                </label>

                <label>

                    Gegrilled:
                    <input
                        name="numberOfPatties"
                        type="checkbox"
                        value={sandwich.grilled}
                        onChange={handleChange}
                    />
                </label>
                <label>

                    Extra wishes:
                    <input
                        name="extraWishes"
                        placeholder="extra tabasco sauce"
                        type="text"
                        value={sandwich.extraWishes}
                        onChange={handleChange}
                    />
                </label>

                <button type={"submit"}>Bestellung hinzufügen</button>
            </form>
        </div>

    );

    /* TODO: Bonusaufgabe 1 -> Füge dem Projekt Routing hinzu (click auf ein Sandwich, öffnet die Sandwich-Details wie bei Rick&Morty)  */
    /* TODO: Bonusaufgabe 2 -> Style das Projekt nach deinen Wünschen  */
    /* TODO: Bonusaufgabe 3 -> Gib dem Sandwich-Objekt mehr Attribute (im Frontend + Backend)  */
}