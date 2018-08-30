import { toast } from 'react-toastify'
​
export const createToast = (msg, type, position) => {
	return toast[type](`${msg}`, {
		position: toast.POSITION[position],
	})
};
​
export const type = 'success' | 'error' | 'warn' | 'info';
​
export const position = 'TOP_CENTER' | 'TOP_LEFT' | 'BOTTOM_LEFT' | 'BOTTOM_CENTER' | 'BOTTOM_RIGHT';
