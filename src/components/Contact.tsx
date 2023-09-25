"use client"
 
import React,{useRef} from 'react'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Typography } from '@mui/material'
 import {motion} from 'framer-motion'
 import emailjs from '@emailjs/browser';
 import { useToast } from "@/components/ui/use-toast"
 import Snackbar from '@mui/material/Snackbar';
 import MuiAlert, { AlertProps } from '@mui/material/Alert';
 
 const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
   props,
   ref,
 ) {
   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
 });
 
const FormSchema = z.object({
  user_name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})
 
const Contact = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
      })
      const forms = useRef();
      const { toast } = useToast()

      function onSubmit(data: z.infer<typeof FormSchema>) {
      
    
        emailjs.sendForm('service_1jovp8k', 'template_0n51dha', forms.current, 'JXJoMBapHvbW75ElF')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          
          handleClick()
      }


  return (
    <div style={{width:'100%', display:'grid',placeItems:'center',marginTop:'10rem'}}>
       <motion.div 
 initial={{ x:200,opacity: 0}}
        
 transition={{ duration: 1 }}
 viewport={{once:true}}
 whileInView={{x : 0, opacity: 1,}}
        style={{width:'100%',display:'grid',placeItems:'center',marginTop:'5rem',marginBottom:'3rem'}}
  
        >
                    <Typography variant='h4' sx={{fontWeight:500, letterSpacing:'1rem',color:'#4d143d',margin:'0 auto'}}>Contact</Typography>
     </motion.div>
<motion.div
style={{width:'100%',display:'grid',placeItems:'center'}}
 initial={{ x:-200,opacity: 0}}
        
 transition={{ duration: 1 }}
 viewport={{once:true}}
 whileInView={{x : 0, opacity: 1,}}
>

<Form {...form}>
      <form ref={forms} style={{marginBottom:'5rem'}} onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
         
         name='user_name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input name='user_name' placeholder="username"  {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
         name='user_email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>email</FormLabel>
              <FormControl>
                <Input name='user_email' placeholder="email" type='email'  {...field} />
              </FormControl>
          
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
         name='user_message'
          render={({ field }) => (
            <FormItem>
              <FormLabel>message</FormLabel>
              <FormControl>
                <Input name='user_message' type='text' placeholder="we would be happy to hear from you... " {...field} />
              </FormControl>
            
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>

</motion.div>
<Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          We have received your message, thanks
        </Alert>
      </Snackbar>
    </div>
  )
}

export default Contact