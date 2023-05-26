import style from "./error.module.css";

const Error = () => {
  return (
    <div className={style.container_Error}>
      <p className={style.title_Error}>Error page not found</p>
      <div>
        <span className={style.code_Error}>404</span>
        <span className={style.message_Error}>Not found</span>
      </div>
    </div>
  );
};

export default Error;
