import {FC} from 'react';
import {addMeal} from "@/app/services/db/db";

interface IProps {

}

const Form: FC<IProps> = () => {
    return (
        <div>
        <form action={addMeal}>

            <input type="text" name={'title'}/>
            <input type="text" name={'creator'}/>
            <input type="text" name={'image'}/>
            <input type="text" name={'slug'}/>
            <input type="text" name={'summary'}/>
            <input type="text" name={'instructions'}/>
            <input type="text" name={'creator_email'}/>
            <button>save meal</button>


        </form>
        </div>
    );
};

export {Form};