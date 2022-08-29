import React, {createContext, useState} from 'react';
import StepNavigation from "./components/stepNavigation/StepNavigation";
import "./styles/Home.scss"

type MainContextProps = {
    updateStep: Function
    currentStep: number
}
export const MainContext = createContext({} as MainContextProps)

function App() {
    const [currentStep, setCurrentStep] = useState<number>(0)
    const labelArray = ["step 1", "step 2", "step 3", "step 4", "step 5"]

    const updateStep = (step?: number) => {

        setCurrentStep((prev: number) => {
            if (step ) return step
            return prev + 1
        })
    }


    return (
        <main className='home'>
            <h1>Welcome Progress Bar!!</h1>
            <p>Select step <span>{currentStep}</span></p>
            <MainContext.Provider value={{currentStep, updateStep}}>
                <StepNavigation
                    currentStep={currentStep}
                    labelArray={labelArray}
                >
                    <div>
                        <button
                            disabled={currentStep >= 5}
                            onClick={() => updateStep()}
                        >
                            next
                        </button>
                    </div>
                </StepNavigation>
            </MainContext.Provider>

        </main>
    );
}

export default App;
