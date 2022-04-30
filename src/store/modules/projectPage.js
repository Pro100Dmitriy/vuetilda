export default {
    actions: {
        async fetchProjectInfo( ctx, id ) {
            try {
                const response = await fetch(`http://localhost:8081/projects/${id}`)
                const data = await response.json()
                ctx.commit('updateProjectsInfo', data)
            }catch( error ){
                ctx.commit('errorUpdateProjectsInfo')
            }
        }
    },
    mutations: {
        updateProjectsInfo( state, data ) {
            state.projectInfo = data
            state.pagesListLoading = false
            state.pagesListError = false
        },
        errorUpdateProjectsInfo( state ) {
            state.projectInfo = {}
            state.pagesListLoading = true
            state.pagesListError = true
        }
    },
    state: {
        projectInfo: {},
        projectInfoLoading: true,
        projectInfoError: false
    },
    getters: {
        getProjectInfo( state ) {
            return state.projectInfo
        },
        getProjectInfoLoading( state ) {
            return state.pagesListLoading
        },
        getProjectInfoError( state ) {
            return state.pagesListError
        }

    }
}