import { useForm } from "react-hook-form";
import "./Search.css";
import { TextField, Button } from "@mui/material";

export const Search = ({ areaName, setAreaName }) => {

    const defaultValues = {
        area: "",
    }

    const { register, getValues, handleSubmit, formState: { errors } } = useForm({
        defaultValues
    });

    const searchArea = () => {
        setAreaName(getValues("area"));
    }

    console.log(areaName)
    console.log(getValues())
    
    return(
        <div className="searchArea">
            <h2 className="searchAreaTitle">エリアを指定</h2>
            <form onSubmit={handleSubmit(searchArea)}>
                <TextField
                    {...register("area")}
                    variant="standard"
                    sx={{ width: "60%", minWidth: "18.75rem", marginRight: "0.9375rem" }}/>
                <Button
                    variant="contained"
                    type="submit"
                    color="primary">検索</Button>
            </form>
            {areaName &&
                <h3 className="searchAreaName">{areaName}の天気</h3>
            }
        </div>
    );
}