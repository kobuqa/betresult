import {ChangeEvent, useState} from "react";

export const useForm = (initialValue?: { [key: string]: boolean | string }) => {
	const [formValue, setFormValue] = useState<{ [key: string]: string | boolean }>(initialValue || {});
	const register = (fieldName: string, type = 'text') => {
		if (type === 'switch') {
			return {
				onChange: (e: ChangeEvent<HTMLInputElement>) => setFormValue(prev => ({
					...prev,
					[fieldName]: e.target.checked
				})),
				checked: formValue[fieldName] as boolean || false
			}
		}
		return {
			onChange: (e: ChangeEvent<HTMLInputElement>) => setFormValue(prev => ({
				...prev,
				[fieldName]: e.target.value
			})),
			value: formValue[fieldName] || ''
		}
	}
	return {formValue, register}
}
