import React from 'react';
import { LayoutCardPequeno, TituloCardPequeno, InfosCardPequeno} from "./styles"
import { ImgCardPequeno } from './styles';

export default function CardPequeno(props) {
        <LayoutCardPequeno>
            <ImgCardPequeno src={props.imagem} />
            <InfosCardPequeno>
                <TituloCardPequeno>{props.nome}</TituloCardPequeno>
                <p>{props.descricao}</p>
            </InfosCardPequeno>
        </LayoutCardPequeno>
}

