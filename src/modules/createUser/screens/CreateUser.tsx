import Input from "../../../shared/components/input/Input";
import Button from "../../../shared/components/button/Button";
import { useCreateUser } from "../hooks/useCreateUser";
import { CreateUserContainerUser } from "../styles/CreateUser.style";

const CreateUser = () => {
    const { createUser, disabled,loading, handleOnChangeInput, handleCreateUser } = useCreateUser();

    return (
        <CreateUserContainerUser>
            <Input
            value={createUser.name}
            onChange={(event) => handleOnChangeInput(event, 'name')}
            margin="0px 0px 16px 0px"
            placeholder="Digite"
            title="Nome completo"
            />
            <Input
            value={createUser.phone}
            onChange={(event) => handleOnChangeInput(event, 'phone')}
            margin="0px 0px 16px 0px"
            placeholder="Digite"
            type="cel-phone"
            title="Telefone"
            />
            <Input
            value={createUser.email}
            onChange={(event) => handleOnChangeInput(event, 'email')}
            margin="0px 0px 16px 0px"
            placeholder="Digite"
            title="Email"
            />
            <Input
            value={createUser.cpf}
            onChange={(event) => handleOnChangeInput(event, 'cpf')}
            margin="0px 0px 16px 0px"
            placeholder="Digite"
            type="cpf"
            title="CPF"
            />
            <Input
            value={createUser.password}
            onChange={(event) => handleOnChangeInput(event, 'password')}
            margin="0px 0px 16px 0px"
            placeholder="Digite"
            secureTextEntry
            title="Senha"
            />
            <Input
            value={createUser.confirmPassword}
            onChange={(event) => handleOnChangeInput(event, 'confirmPassword')}
            margin="0px 0px 16px 0px"
            placeholder="Digite"
            secureTextEntry
            title="Confimar senha"
            />

            <Button
            disabled={disabled}
            onPress={handleCreateUser}
            loading={loading}
            margin="0px 0px 32px 0px"
            title="Criar" />
            </CreateUserContainerUser>
    )
}

export default CreateUser;