import React from 'react';
import PropTypes from 'prop-types';

import {Table, Modal} from 'antd';
import styles from './List.less';
import classnames from 'classnames';


import {DropOption} from '../../components';
// 二次封装的 Table 下拉菜单 component

import {Link} from 'dva/router';

const confirm = Modal.confirm;

const List = ({ onDeleteItem, onEditItem, isMotion, location, ...tableProps }) => {
    const handleMenuClick = (record, e) => {
        if (e.key === '1') {
            onEditItem(record);
        } else if (e.key === '2') {
            confirm({
                title: '确定删除此记录吗？',
                onOk () {
                    onDeleteItem(record.id);
                }
            });
        }
    };
    const columns = [
        {
            title: '头像',
            dataIndex: 'avatar',
            key: 'avatar',
            width: 64,
            className: styles.avatar,
            render: (text) => <img alt={'avatar'} width={24} src={text} />,
        },
        {
            title: '名字',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => (
                <Link to={`user/${record.id}`}>
                    {
                        `A_Link ${text}`
                    }
                </Link>
            )
        },
        {
            title: '昵称',
            dataIndex: 'nickName',
            key: 'nickName'
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age'
        },
        {
            title: '性别',
            dataIndex: 'isMale',
            key: 'isMale',
            render: (text) => (
                <span>
                    {text ? '男' : '女'}
                </span>
            )
        },
        {
            title: '电话号码',
            dataIndex: 'phone',
            key: 'phone'
        },
        {
            title: '邮箱',
            dataIndex: 'email',
            key: 'email'
        },
        {
            title: '地址',
            dataIndex: 'address',
            key: 'address'
        },
        {
            title: '创建时间',
            dataIndex: 'createTime',
            key: 'createTime',
            render: (date) => (
                // 2017-02-12 08:11:08
                // substr(begin [,end])
                // substr(10) === " 08:11:08"
                // substr(0,10) === "2017-02-12"
                date.toString().substr(0,10)
            )
        },
        {
            title: '操作',
            key: 'operation',
            width: 100,
            render: (text, record) => {
                return(
                    <DropOption 
                        onMenuClick={e => handleMenuClick(record, e)} 
                        menuOptions={[
                            {key: '1', name: '更新'},
                            {key: '2', name: '删除'}
                        ]}
                    />
                )
            }
        }
    ];
    return (
        <div>
            <Table
                {...tableProps}
                className={classnames({ [styles.table]: true, [styles.motion]: isMotion })}
                bordered
                scroll={{ x: 1250 }}
                columns={columns}
                simple
                rowKey={record => record.id}
            />
        </div>
    )
};

List.propTypes = {
    onDeleteItem: PropTypes.func,
    onEditItem: PropTypes.func,
    isMotion: PropTypes.bool,
    location: PropTypes.object
};

export default List;
