"use client"
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGrammarCheck, setSpellCheck } from '@/redux/slices/improveTextSlice';
import CustomSwitch from '@/components/common/switch/switch';
import { CgClose } from 'react-icons/cg';

export default function ImproveText() {
    const dispatch = useDispatch();
    const grammarCheck = useSelector((state: any) => state?.ImproveText?.grammarCheck);
    const spellCheck = useSelector((state: any) => state?.ImproveText?.spellCheck);

    // Handle grammar check toggle
    const handleGrammarCheck = () => {
        dispatch(setGrammarCheck(!grammarCheck));

    };

    // Handle spell check toggle
    const handleSpellCheck = () => {
        dispatch(setSpellCheck(!spellCheck));
    };

    useEffect(() => {
        console.log('Updated grammarCheck:', grammarCheck);
        console.log('Updated spellCheck:', spellCheck);
    }, [grammarCheck, spellCheck]);

    return (
        <div className='px-4 py-4 border-2 rounded-lg bg-white'>
            <div className='border-b flex py-2 items-center justify-between px-2'>
                <p>Improve Text</p>
                <CgClose />
            </div>

            <div className='pt-8'>
                <div className='flex pb-8 items-center justify-between px-2'>
                    <p>Grammar Checker</p>
                    <CustomSwitch
                        checked={grammarCheck}
                        onChange={handleGrammarCheck}

                    />
                </div>
                <div className='flex pb-8 items-center justify-between px-2'>
                    <p>Spelling Checker</p>
                    <CustomSwitch
                        checked={spellCheck}
                        onChange={handleSpellCheck}
                    />
                </div>
            </div>
        </div>
    );
}
