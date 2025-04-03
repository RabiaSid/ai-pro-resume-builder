import CustomSwitch from '@/components/common/switch/switch'
import React from 'react'
import { CgClose } from 'react-icons/cg'

type PropType = {
    grammarCheck: boolean;
    setGrammarCheck: (value: boolean) => void;
    spellCheck: boolean;
    setSpellCheck: (value: boolean) => void;
};

export default function ImproveText(props: PropType) {
    const { grammarCheck, setGrammarCheck, spellCheck, setSpellCheck } = props;
    return (
        <div className='px-4 py-4 border-2 rounded-lg bg-white'>
            <div className='border-b flex py-2 items-center justify-between px-2'>
                <p>Improve Text</p>
                <CgClose />
            </div>

            <div className='pt-8'>
                <div className='flex pb-8 items-center justify-between px-2'>
                    <p>Grammar Checker</p>
                    <CustomSwitch checked={grammarCheck} onChange={() => setGrammarCheck(!grammarCheck)} />
                </div>
                <div className='flex pb-8 items-center justify-between px-2'>
                    <p>Spelling Checker</p>
                    <CustomSwitch checked={spellCheck} onChange={() => setSpellCheck(!spellCheck)} />
                </div>
            </div>
        </div>
    )
}
