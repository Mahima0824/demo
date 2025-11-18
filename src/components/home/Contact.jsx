import React from 'react'
import Section from '../ui/Section'
import FormInput from '../ui/FormInput'
import FormSelect from '../ui/FormSelect'

const Contact = () => {
    return (
        <Section>
            <div>
                {/* Left column: heading + location */}
                <div>
                    <h2 className='text-2xl md:text-3xl font-semibold tracking-tight mb-16'>
                        Contact us to find out more
                    </h2>
                </div>

                <div className='flex justify-between'>
                    <div className='md:w-5/12 space-y-8'>
                        <div className='space-y-2 text-sm md:text-base'>
                            <p className='text-[11px] md:text-xs font-semibold tracking-[0.16em] uppercase text-white/60'>
                                Location
                            </p>
                            <p className='text-sm md:text-base text-white/80'>
                                Dubai Maritime City, Dubai, UAE
                            </p>
                        </div>
                    </div>

                    {/* Right column: form */}
                    <div className='md:flex-none md:basis-[68%]'>
                        <p className='text-[11px] md:text-xs font-semibold tracking-[0.16em] uppercase text-white/60 mb-4'>
                            Send us a message
                        </p>

                        <form className='space-y-4'>
                            {/* First row */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                                <FormInput
                                    type='text'
                                    placeholder='Full Name'
                                />
                                <FormInput
                                    type='email'
                                    placeholder='Email'
                                />
                            </div>

                            {/* Second row */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                                <FormSelect defaultValue=''>
                                    <option value='' disabled className='bg-[#05070a]'>
                                        Company
                                    </option>
                                    <option className='bg-[#05070a]'>Individual</option>
                                    <option className='bg-[#05070a]'>Organization</option>
                                </FormSelect>
                                <FormInput
                                    type='text'
                                    placeholder='Role in Company'
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <FormInput
                                    type='textarea'
                                    rows={5}
                                    placeholder='Message'
                                />
                            </div>

                            {/* Consent + button row */}
                            <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-2'>
                                <label className='flex items-start gap-2 text-[10px] md:text-[11px] text-white/60 max-w-md cursor-pointer'>
                                    <span className='mt-[2px] inline-flex h-3.5 w-3.5 items-center justify-center border border-[#6b7582] rounded-[3px]'>
                                        <input
                                            type='checkbox'
                                            className='peer sr-only'
                                        />
                                        <span className='pointer-events-none block h-2.5 w-2.5 rounded-[2px] bg-transparent transition-colors duration-150 peer-checked:bg-[#6b7582]' />
                                    </span>
                                    <span>
                                        I hereby agree to and accept the Privacy Policy and give permission to access my personal data.
                                    </span>
                                </label>

                                <button
                                    type='submit'
                                    className='group ml-auto inline-flex items-center justify-center gap-2 px-8 py-3 text-xs tracking-[0.18em] uppercase bg-[#111820] border border-white/20 rounded-sm '
                                >
                                    <span>Send</span>
                                    <span className='relative flex h-4 w-4 overflow-hidden'>
                                        {/* Default arrow (visible, slides right on hover) */}
                                        <svg
                                            width='15'
                                            height='16'
                                            viewBox='0 0 15 16'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='absolute inset-0 h-4 w-4 transform transition-all duration-300 ease-out group-hover:translate-x-full group-hover:opacity-0'
                                        >
                                            <path
                                                d='M0.75 8H14.25M14.25 8L7.53327 14.75M14.25 8L7.53327 1.25'
                                                stroke='currentColor'
                                                strokeLinejoin='bevel'
                                            />
                                        </svg>

                                        {/* Hover arrow (starts left, slides in on hover) */}
                                        <svg
                                            width='15'
                                            height='16'
                                            viewBox='0 0 15 16'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='absolute inset-0 h-4 w-4 -translate-x-full opacity-0 transform transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100'
                                        >
                                            <path
                                                d='M0.75 8H14.25M14.25 8L7.53327 14.75M14.25 8L7.53327 1.25'
                                                stroke='currentColor'
                                                strokeLinejoin='bevel'
                                            />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Contact