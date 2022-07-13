import React from 'react';
import { useNavigate } from 'react-router-dom';

import { InputField } from '../components/InputField';
import { Note } from '../@types';
import { Button } from '../components/Button';

interface Props {
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

type Values = {
  title: string;
  body: string;
};

const initialValues: Values = {
  title: '',
  body: '',
};

function NewNote(props: Props) {
  const { setNotes } = props;
  const navigate = useNavigate();
  const [values, setValues] = React.useState<Values>(initialValues);

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearForm = () => setValues(initialValues);

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const id = +new Date();
    const newNote: Note = {
      id,
      archived: false,
      createdAt: new Date().toISOString(),
      ...values,
    };

    setNotes((prev) => [...prev, newNote]);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="grid grid-cols-1 gap-4 my-4">
        <InputField
          name="title"
          label="Note title:"
          placeholder="My amazing note..."
          maxLength={50}
          value={values.title}
          onChange={handleChangeValue}
        />

        <InputField
          name="body"
          multiLine
          rows={10}
          label="Note Body:"
          placeholder="Write note here..."
          value={values.body}
          onChange={handleChangeValue}
        />

        <div className="flex gap-4 ">
          <Button fullWidth variant="secondary" onClick={handleClearForm}>
            Clear
          </Button>
          <Button fullWidth type="submit">
            Add
          </Button>
        </div>
      </div>
    </form>
  );
}

export { NewNote };
