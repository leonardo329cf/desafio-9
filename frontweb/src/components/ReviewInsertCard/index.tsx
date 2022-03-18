import { AxiosRequestConfig } from 'axios';
import { useState } from 'react';
import { requestBackend } from '../../util/requests';
import { useForm } from 'react-hook-form';

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
    <div className="review-insert-card-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-container">
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
          <button className="btn btn-primary">
            <h6>SALVAR AVALIAÇÂO</h6>
          </button>
        </div>
      </form>
      {hasError && (
        <div className="alert alert-danger">Erro ao submeter avaliação</div>
      )}
    </div>
  );
};
export default ReviewInsertCard;
