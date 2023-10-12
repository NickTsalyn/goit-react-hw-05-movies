import { Button, Input, Form } from "./SearchForm.styled"



export const SearchBox = ({onChange, onSubmit}) => {
    return (
        <Form onSubmit={onSubmit}>
            <Input type="text" onChange={onChange}/>
            <Button>Search</Button>
        </Form>
    )
}