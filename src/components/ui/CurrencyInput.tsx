import CurrencyInput, {
	type CurrencyInputProps,
	type CurrencyInputOnChangeValues,
} from "react-currency-input-field";
import { useState } from "react";
import { formatCurrency } from "@/utils/helpers";
import { cn } from "@/utils/twMerge";

interface CurrencyInputCustomProps {
	initialValue: number;
	onChange?: (value: number, error: boolean) => void;
	limit?: number;
	prefix?: string;
	disabled?: boolean;
}

export default function CurrencyInputCustom({
	initialValue,
	onChange,
	limit,
	prefix = "$",
	disabled = false,
}: CurrencyInputCustomProps) {
	const [errorMessage, setErrorMessage] = useState("");
	const [values, setValues] = useState<CurrencyInputOnChangeValues>();
	const [value, setValue] = useState<string | number>(initialValue || 0);
	const handleOnValueChange: CurrencyInputProps["onValueChange"] = (
		_value,
		name,
		_values,
	) => {
		setValues(_values);

		if (limit && Number(_value) > limit) {
			setErrorMessage(`Max: ${formatCurrency(limit)}`);
			setValue(_value || 0);
			onChange?.(_values?.float || 0, true);
			return;
		}
		setErrorMessage("");
		setValue(_value || 0);
		onChange?.(_values?.float || 0, false);
	};
	return (
		<div className="flex flex-col gap-1">
			<CurrencyInput
				value={value}
				onValueChange={handleOnValueChange}
				style={{ width: `${(values?.formatted?.length || 2) * 25}px` }}
				className={cn("max-w-fit font-bold text-[2rem] text-center focus:outline-none focus:border-b-1 focus:border-background", errorMessage && "focus:border-b-red-300")}
				intlConfig={{ locale: "es-AR", currency: "ARS" }}
				id="amount"
				name="amount"
				decimalsLimit={2}
				prefix={prefix}
				placeholder="0"
				disabled={disabled}
				/>
			{errorMessage && (
				<p className="text-sm font-bold text-center text-red-600">
					{errorMessage}
				</p>
			)}
		</div>
	);
}
