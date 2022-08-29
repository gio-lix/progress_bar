import React, {FC, useContext} from 'react';
import "./Style.scss"
import {MainContext} from "../../App";
import {classNames} from "../../utils/classes";

interface Props {
    children: React.ReactNode
    label: string
    index: number
}

const Step: FC<Props> = ({label, index, children}) => {
    const {updateStep, currentStep} = useContext(MainContext)


    return (
        <section className="circle">
            <div
                className={classNames("rounded", (currentStep === index || currentStep > index) ? "active demo" : "")}
                onClick={() => updateStep(index)}
            >
                <span>{index}</span>
            </div>
            <span className="circle_label">{label}</span>
            {children}
        </section>
    );
};

export default Step;