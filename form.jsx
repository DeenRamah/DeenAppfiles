/**...form.*/

return (
  <form className ='comment-form' onSubmit={form.handleSubmit(onSubmit)}>
    <FormField
      control={form.control}
      name='thread'
      render={({field}) =>(
        <FormLabel>
          <Image
            src={currentUserImg}
            alt='current_user'
            width={48}
            height={48}
            className='rounded-full object-cover'
            />

          <FormControl className='border-none bg-transparent'>
            <Input
              type='text'
              {...field}
              placeholder='Comment...'
              className='no-focus text-light-1 outline-none'
              />
            
          </FormControl>
        </FormItem>
      )}
  

    <Button type+'submit' className='comment-form_btn'>
    Reply
    
    </Button>
  </Form>
);
}

export default Comment;
