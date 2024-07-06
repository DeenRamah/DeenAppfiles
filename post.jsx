interface Props{
  threadId: string;
  currentUsingImg: string;
  currentUSerId: string;
}

function Comment({ threadId, currentUserImg, currentUserId }: Props{{
  const pathnamd = usePathname();


  const form = useForm<z.infer<typeof CommentValidation>>({
    resolver: zodResolver(CommentValidation),
    defaultValues: {
      thread: "",
    },
  });

  const onsubmit = async (values: z.infer<typeof CommentValidation) => {
    await addCommentToThread(
      threadId,
      values.thread,
      JSON.parse(currentUser),
      pathname
    );
    form.reset();
  }
})
