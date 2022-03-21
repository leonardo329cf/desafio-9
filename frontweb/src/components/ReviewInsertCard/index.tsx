import { AxiosRequestConfig } from 'axios';
import { useState } from 'react';
import { requestBackend } from '../../util/requests';
import { useForm } from 'react-hook-form';

import './styles.css';

type Props = {
  movieId: string;
  refresh: Function;
};

type FormData = {
  text: string;
};

const ReviewInsertCard = ({ movieId, refresh }: Props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const [hasError, setHasError] = useState(false);

  const onSubmit = (formData: FormData) => {
    const params: AxiosRequestConfig = {
      method: 'POST',
      url: `/reviews`,
      withCredentials: true,
      data: {
        text: formData.text,
        movieId: parseInt(movieId),
      },
    };
    requestBackend(params)
      .then((response) => {
        setHasError(false);   
        setValue('text','');     
        if (refresh !== undefined) {
          refresh();
        }
      })
      .catch((error) => {
        setHasError(true);
        console.log('ERRO', error);
      });
  };

  return (
    <div className="review-insert-card-container bg-secondary">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('text', {
            required: 'Campo obrigatório',
          })}
          type="text"
          className={`form-control base-input ${
            errors.text ? 'is-invalid' : ''
          }`}
          placeholder="Deixe sua avaliação aqui"
          name="text"
        />
        <button className="btn btn-tertiary">
          <h6>SALVAR AVALIAÇÃO</h6>
        </button>
      </form>
      {hasError && (
        <div className="alert alert-danger">Erro ao submeter avaliação</div>
      )}
    </div>
  );
};
export default ReviewInsertCard;
