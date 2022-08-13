import type { NextPage } from 'next';
import { TextInput, Textarea, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Layout } from 'src/components/layouts';

const Contact: NextPage = () => {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      name: (value) => (value ? null : 'Invalid name'),
      message: (value) => (value ? null : 'Invalid message'),
    },
  });
  return (
    <Layout>
      <div className="m-auto max-w-screen-md  px-4 xs:px-0">
        <div className="mt-10 mb-16">
          <h2 className="mb-5 text-[26px] font-bold">Contact</h2>
          <div className="mb-6 w-full border-b-2 border-b-m_gray-2"></div>
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <TextInput
              required
              label="Email"
              placeholder="your@email.com"
              {...form.getInputProps('email')}
              className="mb-6"
            />
            <TextInput
              required
              label="Name"
              placeholder="Taro Yamada"
              {...form.getInputProps('name')}
              className="mb-6"
            />
            <Textarea
              required
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
