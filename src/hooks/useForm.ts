import {ChangeEvent, useState} from "react";

export const useForm = <T extends {[key: string]: string | boolean}>(initialValue: T) => {
	const [formValue, setFormValue] = useState<T>(initialValue);
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
