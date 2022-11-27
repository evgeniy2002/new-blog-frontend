import React from 'react';
import s from './Post.module.scss';

export const Post: React.FC<PropsType> = ({ id, title, text, imageUrl, tags, optional }) => {
  return (
    <div className={s.root}>
      <div className={optional ? s.wrapper_optional : s.wrapper}>
        <div className={s.wrapper_img + ' ' + 'ibg'}>
          <img src={imageUrl} alt="" />
        </div>
        <div className={s.wrapper_body}>
          {optional ? (
            <h2 className={s.wrapper_title}>
              <a href="#">{title}</a>
            </h2>
          ) : (
            <h1 className={s.wrapper_title}>
              <a href="#">{title}</a>
            </h1>
          )}

          <p className={s.wrapper_text}>{text}</p>
          <ul className={s.wrapper_tags}>
            {tags.map((el) => (
              <li>
                <span> </span>
                <a href="#">{el}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

type PropsType = {
  id: number;
  title: string;
  text: string;
  imageUrl: string;
  tags: string[];
  optional?: boolean | null;
};
