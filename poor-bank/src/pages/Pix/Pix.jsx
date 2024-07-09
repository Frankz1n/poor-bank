import ButtonDefault from "../../components/ButtonDefault/ButtonDefault"
import HeaderDefault from "../../components/HeaderDefault/HeaderDefault"
import InputDefault from "../../components/InputDefault/InputDefault"
import style from "./Pix.module.css"

export default function Pix() {
    return (
        <div className={style.container}>
            <div className={style.header}>
                <HeaderDefault />
            </div>
            
            <div className={style.content}>
                <h1 className={style.tituloPix}>Área Pix</h1>
                <h2 className={style.subTituloPix}> Envie e receba pagamentos a qualquer hora e dia da </h2>
                <h2 className={style.subTituloPix}> semana, sem pagar nada por isso. </h2>

                <div className={style.cardContainer}>
                    <div className={style.card}>
                        <div className={style.cardContent}>
                            <InputDefault name={'Tipo'} width={'10%'}/>
                            <div className={style.space}></div>
                            <InputDefault name={'Chave'} width={'25%'}/>
                            <div className={style.space}></div>
                            <ButtonDefault label={'Pagar'} width={'150px'} height={'40px'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}