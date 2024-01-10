interface UpdateUserRouteProps {
  body: {
    name: string;
    email: string;
    password: string;
  }
  params: {
    id: number
  }
}
interface UpdateUserControllerProps {
  data: {
    name: string;
    email: string;
    password: string;
  }
  params: {
    id: number
  }
}

function updateUserRoute({ body, params }: UpdateUserRouteProps) {
  updateUserController({ body: { name, email, password }, params: { id: 2 } })
}

function updateUserController({ data, params }: UpdateUserControllerProps) {
  userRepository.update({ data: { name, email, password }, params: { id: 2 } })
}

const userRepository = {
  update: ({ data: { name, email, password }, params: { id: 2 } }: UpdateUserControllerProps) => { data, params },
}
