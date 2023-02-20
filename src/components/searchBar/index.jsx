import { Button, Form, Input, Row } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchData } from 'searchSlice';
import styles from './searchBar.module.css';

export default function SearchBar() {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const dataSearch = useSelector(state => state.search.searchData);
    const handleSubmit = (data) => {
        dispatch(setSearchData(data.search))
    }
    useEffect(() => {
        form.setFieldValue('search', dataSearch)
    }, [dataSearch, form])
    return (
        <Row className={styles['container']}>
            <Form form={form} onFinish={handleSubmit}>
                <Row >
                    <Form.Item name="search" className={styles['mr-10']} initialValue={dataSearch}>
                        <Input allowClear />
                    </Form.Item>
                    <Button type='primary' htmlType='submit'>Search</Button>
                </Row>
            </Form>
        </Row>
    )
}
