import {FC,memo} from 'react'
import styles from './react-form.module.less';
import { useForm} from 'react-hook-form';

const ReactForm:FC = () => {
    const { register,handleSubmit,formState : {errors} } = useForm({
        defaultValues : {
            firstName : "Avi",
            lastName : "Son"
        }
    });
    return (
    <div className={styles.formContainer}>
        <form onSubmit={handleSubmit((data:any) => console.log(data))}>
            <input {...register("firstName",{required : "First Name is required"})}/>
            <div>{errors.firstName?.message}</div>
            <input {...register("lastName",{required : "Last Name is required"})}/>
            <div>{errors.lastName?.message}</div>

            <input type='submit'/>
        </form>

    </div>
  )
}

export default memo(ReactForm)