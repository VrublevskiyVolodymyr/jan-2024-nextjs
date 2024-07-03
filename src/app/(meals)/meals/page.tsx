import {Form} from "@/app/components";
import {getMeals} from "@/app/services/db/db";
import styles from './form.module.css'

interface IProps {

}

const MealsPage = async () => {


    let meals = await getMeals();
    return (
        <div className={styles.form}>
            <Form/>
            {
                meals.map(meal => (<div  key={meal.id}>{meal.title}</div>))
            }

        </div>
    );
};

export default MealsPage;