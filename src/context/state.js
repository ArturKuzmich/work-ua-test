import axios from "axios";
import {useNavigate, useLocation} from "react-router-dom";
import React, {useMemo, useState, useEffect} from "react";
import {API_URL} from "../constants";
import {DataContext} from "./context";

export const DataState = ({children}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [store, setStore] = useState({});
    const [item, setItem] = useState({});
    useEffect(() => {
        setItem({});
    }, [location]);

    const getList = async (entity) => {
        const {data} = await axios.get(`${API_URL}${entity}`);
        if (data) {
            setStore({
                ...store,
                [entity]: data,
            });
        }
    };

    const getItem = async (entity, id) => {
        const {data} = await axios.get(`${API_URL}${entity}/${id}`);
        if (data) {
            setItem(data);
        }
    };

    const createItem = async (entity, data, navigateTo) => {
        const {status} = await axios.post(`${API_URL}${entity}`, data);
        if (status === 200) {
            setStore(entity);
            navigate(navigateTo);
        }
    };

    const deleteItem = async (entity, id, updateList) => {
        const {status} = await axios.delete(`${API_URL}${entity}/${id}`);
        if (status === 200) {
            setStore({
                ...store,
                [updateList]: store[updateList].filter((b) => b.id !== id),
            });
        }
    };

    const getAutocomplete = async (text, entity) => {
        const {data} = await axios.get(`${API_URL}${entity}?search=${text}`);
        return data
    }

    const updateItem = async (entity, data, id) => {
        await axios.put(`${API_URL}${entity}/${id}`, data);
    };

    const value = useMemo(
        () => ({
            store,
            item,
            getItem,
            getList,
            createItem,
            deleteItem,
            updateItem,
            getAutocomplete,
        }),
        // eslint-disable-next-line
        [store, item]
    );

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
