import type { NextPage } from 'next';
import { TextInput, Textarea, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Layout } from 'src/layout';
import { client } from 'src/lib/client';
import { Props } from 'src/components/type';

const Contact: NextPage = () => {
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      subject: '',
      message: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'メールアドレスの形式が異なります'),
      subject: (value) => (value ? null : '件名を入力してください'),
      name: (value) => (value ? null : 'お名前を入力してください'),
      message: (value) => (value ? null : 'メッセージを入力してください'),
    },
  });

  const contactHandleClick = () => {
    const contactValues: Props['contactValues'] = form.values;
    client
      .create({
        endpoint: 'contact',
        content: contactValues,
      })
      .then((res: any) => form.reset());
  };

  return (
    <Layout>
      <div className="m-auto max-w-screen-md  px-4 xs:px-0">
        <div className="mt-10 mb-16">
          <h2 className="mb-5 text-[26px] font-bold">Contact</h2>
          <div className="mb-6 w-full border-b-2 border-b-m_gray-2"></div>
          <form
            onSubmit={form.onSubmit(() => {
              contactHandleClick();
            })}
          >
            <TextInput
              label="Email"
              placeholder="test@test.com"
              {...form.getInputProps('email')}
              className="mb-6"
            />
            <TextInput
              label="Subject"
              placeholder="contact subject"
              {...form.getInputProps('subject')}
              className="mb-6"
            />
            <TextInput
              label="Name"
              placeholder="Taro Yamada"
              {...form.getInputProps('name')}
              className="mb-6"
            />
            <Textarea
              label="Your message"
              placeholder="I want to order your goods"
              {...form.getInputProps('message')}
              className="mb-6"
            />

            <Button
              type="submit"
              color="dark"
              radius="xl"
              className="mx-auto block h-[45px] w-[154px] text-base"
            >
              Send message
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
