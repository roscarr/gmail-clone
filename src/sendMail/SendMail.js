import './SendMail.css'
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { closeSendMessage } from '../features/mailSlice';
import { useDispatch } from 'react-redux/es/exports';
import { db } from '../firebase';
import { serverTimestamp } from "firebase/firestore";
function SendMail() {
  const dispatch=useDispatch()
    const {register,handleSubmit,watch,formState: { errors }}=useForm()
    const onSubmit=(formData)=>{
         console.log(formData);
         db.collection("emails").add({
          to:formData.to,
          subject:formData.subject,
          message:formData.message,
          timestamp:serverTimestamp()
         })
      dispatch(closeSendMessage())
    }
  return (
    <div className='sendMail'>
      
      <div className="sendMail__Header">
        <h3>New Message</h3>
        <CloseIcon  onClick={()=>dispatch(closeSendMessage())}   className='sendMail__close'   />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} >
        <input  type="email" placeholder='To' {...register('to',{required:true})}/>
        {errors.to && <p className='sendMail__error'>To is required</p>}
        <input  type="text" placeholder='Subject' {...register('subject',{required:true})}/>
        {errors.subject && <p className='sendMail__error'>Subject is required</p>}
        <input name='message' type="text" placeholder='Message...'className='sendMail__message'
               {...register('message',{required:true})}/>
        {errors.message && <p className='sendMail__error'>Message is required</p>}

        <div className="sendMail__options">
            <Button className='sendMail__send'
            variant='contained'
            color='primary'
            type='submit'
            >
                Send
            </Button>
        </div>
      </form>
    </div>
  )
}

export default SendMail
