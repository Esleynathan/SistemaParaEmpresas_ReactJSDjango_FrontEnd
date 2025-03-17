import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState, useEffect } from "react";

type Props = {
    selectedTaskStatus: number;
    setSelectedTaskStatus: (status_id: number) => void;
}
const SelectTaskStatus = ({ selectedTaskStatus, setSelectedTaskStatus }: Props) => {
    return (
        <FormControl fullWidth>
            <InputLabel> Selecione um status</InputLabel>
            <Select
                value={selectedTaskStatus}
                label="Selecione um status"
                onChange={(e) => setSelectedTaskStatus(Number(+e.target.value))}
            >
                <MenuItem value={1}>Pendente</MenuItem>
                <MenuItem value={2}>Em andamento</MenuItem>
                <MenuItem value={3}>Concluída</MenuItem>
            </Select>
        </FormControl>          
    )

}

export default SelectTaskStatus