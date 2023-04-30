import React, {FC} from 'react';
import {PagesType} from '../state/pagesState'
import {useParams} from "react-router-dom";
import {log} from "util";

type PagePropsType = {
  state: PagesType[]
}

const Page: FC<PagePropsType> = ({state}) => {

  const params = useParams()

  return (
      <div>
      <div>{state[Number(params.id)].name}</div>
      <div>{state[Number(params.id)].content}</div>
      </div>
  );
};

export default Page;