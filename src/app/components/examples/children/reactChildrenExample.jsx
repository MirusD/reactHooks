import React, { useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
import TextField from "../../common/form/textField";
import PropTypes from "prop-types";

const FormComponent = ({ children }) => {
    const [data, setData] = useState({});
    useEffect(() => console.log(data), [data]);
    const handleChange = (target) => {
        setData(preState => ({ ...preState, [target.name]: target.value }));
    };
    return React.Children.map(children, (child) => {
        const config = {
            ...child.props,
            onChange: handleChange,
            value: data[child.props.name] || ""
        };

        return React.cloneElement(child, config);
    });
};

FormComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const ListsComponent = ({ children }) => {
    return <ol>
        {React.Children.map(children, (child) => {
            return (
                <li>
                    {React.cloneElement(child)}
                </li>
            );
        })}
    </ol>;
};

ListsComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const ReactChildrenExample = () => {
    return (
        <>
            <CardWrapper>
                <SmallTitle>Clone form and add props</SmallTitle>
                <Divider/>
                <FormComponent>
                    <TextField name="email" label="email"/>
                    <TextField name="password" label="password" type="password"/>
                </FormComponent>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Домашнее задание</SmallTitle>
                <Divider/>
                <ListsComponent>
                    <Component1/>
                    <Component2/>
                    <Component3/>
                </ListsComponent>
            </CardWrapper>
        </>
    );
};

const Component1 = () => {
    return <div>Компонент списка 1</div>;
};
const Component2 = () => {
    return <div>Компонент списка 2</div>;
};
const Component3 = () => {
    return <div>Компонент списка 3</div>;
};
export default ReactChildrenExample;
