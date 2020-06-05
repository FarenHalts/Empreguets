import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

class UserPermissions {
    getCameraPermission = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

            if (status != "granted") {
                alert("Precisamos de acesso para você inserir uma imagem de perfil")
            }
        }
    };
}

export default new UserPermissions();