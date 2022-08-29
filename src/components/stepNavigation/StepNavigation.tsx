import React, {FC} from 'react';
import "./Style.scss"
import Step from "../step";

interface Props {
    children: React.ReactNode
    labelArray: string[]
    currentStep: number
}

const StepNavigation: FC<Props> = ({labelArray, children}) => {

    return (
        <article>
            <section className="step_wrapper">
                {labelArray.map((item: string, index: number) => (
                    <Step key={index} index={index + 1} label={item}> </Step>
                ))}
            </section>
            <section className="step_section">
                {children}
            </section>
        </article>
    );
};

export default StepNavigation;