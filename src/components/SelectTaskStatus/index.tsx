import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState, useEffect } from "react";

type Props = {
    selectedStatus: number;
    setSelectedStatus: (status_id: number) => void;
}
const SelectTaskStatus = ({ selectedStatus, setSelectedStatus }: Props) => {
    return (
        <FormControl fullWidth>
            <InputLabel> Selecione um status</InputLabel>
            <Select
                value={selectedStatus}
                label="Selecione um status"
                onChange={(e) => setSelectedStatus(Number(+e.target.value))}
            >
                <MenuItem value={1}>Pendente</MenuItem>
                <MenuItem value={2}>Em andamento</MenuItem>
                <MenuItem value={3}>Concluída</MenuItem>
            </Select>
        </FormControl>          
    )

}

export default SelectTaskStatus