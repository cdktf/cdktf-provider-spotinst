# `spotinst_organization_user`

Refer to the Terraform Registory for docs: [`spotinst_organization_user`](https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/organization_user).

# `organizationUser` Submodule <a name="`organizationUser` Submodule" id="@cdktf/provider-spotinst.organizationUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationUser <a name="OrganizationUser" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/organization_user spotinst_organization_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/organizationuser"

organizationuser.NewOrganizationUser(scope Construct, id *string, config OrganizationUserConfig) OrganizationUser
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig">OrganizationUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig">OrganizationUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.putPolicies">PutPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.resetPolicies">ResetPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.resetRole">ResetRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.resetUserGroupIds">ResetUserGroupIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutPolicies` <a name="PutPolicies" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.putPolicies"></a>

```go
func PutPolicies(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.putPolicies.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.resetId"></a>

```go
func ResetId()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPolicies` <a name="ResetPolicies" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.resetPolicies"></a>

```go
func ResetPolicies()
```

##### `ResetRole` <a name="ResetRole" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.resetRole"></a>

```go
func ResetRole()
```

##### `ResetUserGroupIds` <a name="ResetUserGroupIds" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.resetUserGroupIds"></a>

```go
func ResetUserGroupIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/organizationuser"

organizationuser.OrganizationUser_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/organizationuser"

organizationuser.OrganizationUser_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/organizationuser"

organizationuser.OrganizationUser_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.policies">Policies</a></code> | <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList">OrganizationUserPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.firstNameInput">FirstNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.lastNameInput">LastNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.policiesInput">PoliciesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.userGroupIdsInput">UserGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.userGroupIds">UserGroupIds</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.policies"></a>

```go
func Policies() OrganizationUserPoliciesList
```

- *Type:* <a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList">OrganizationUserPoliciesList</a>

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `FirstNameInput`<sup>Optional</sup> <a name="FirstNameInput" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.firstNameInput"></a>

```go
func FirstNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.lastNameInput"></a>

```go
func LastNameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PoliciesInput`<sup>Optional</sup> <a name="PoliciesInput" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.policiesInput"></a>

```go
func PoliciesInput() interface{}
```

- *Type:* interface{}

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `UserGroupIdsInput`<sup>Optional</sup> <a name="UserGroupIdsInput" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.userGroupIdsInput"></a>

```go
func UserGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `UserGroupIds`<sup>Required</sup> <a name="UserGroupIds" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.userGroupIds"></a>

```go
func UserGroupIds() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationUserConfig <a name="OrganizationUserConfig" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/organizationuser"

&organizationuser.OrganizationUserConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Email: *string,
	FirstName: *string,
	LastName: *string,
	Id: *string,
	Password: *string,
	Policies: interface{},
	Role: *string,
	UserGroupIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.email">Email</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/organization_user#email OrganizationUser#email}. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.firstName">FirstName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/organization_user#first_name OrganizationUser#first_name}. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.lastName">LastName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/organization_user#last_name OrganizationUser#last_name}. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/organization_user#id OrganizationUser#id}. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/organization_user#password OrganizationUser#password}. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.policies">Policies</a></code> | <code>interface{}</code> | policies block. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/organization_user#role OrganizationUser#role}. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.userGroupIds">UserGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/organization_user#user_group_ids OrganizationUser#user_group_ids}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.email"></a>

```go
Email *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/organization_user#email OrganizationUser#email}.

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.firstName"></a>

```go
FirstName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/organization_user#first_name OrganizationUser#first_name}.

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.lastName"></a>

```go
LastName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/organization_user#last_name OrganizationUser#last_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/organization_user#id OrganizationUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/organization_user#password OrganizationUser#password}.

---

##### `Policies`<sup>Optional</sup> <a name="Policies" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.policies"></a>

```go
Policies interface{}
```

- *Type:* interface{}

policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/organization_user#policies OrganizationUser#policies}

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/organization_user#role OrganizationUser#role}.

---

##### `UserGroupIds`<sup>Optional</sup> <a name="UserGroupIds" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.userGroupIds"></a>

```go
UserGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/organization_user#user_group_ids OrganizationUser#user_group_ids}.

---

### OrganizationUserPolicies <a name="OrganizationUserPolicies" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPolicies.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/organizationuser"

&organizationuser.OrganizationUserPolicies {
	PolicyAccountIds: *[]*string,
	PolicyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPolicies.property.policyAccountIds">PolicyAccountIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/organization_user#policy_account_ids OrganizationUser#policy_account_ids}. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPolicies.property.policyId">PolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/organization_user#policy_id OrganizationUser#policy_id}. |

---

##### `PolicyAccountIds`<sup>Required</sup> <a name="PolicyAccountIds" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPolicies.property.policyAccountIds"></a>

```go
PolicyAccountIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/organization_user#policy_account_ids OrganizationUser#policy_account_ids}.

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPolicies.property.policyId"></a>

```go
PolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/organization_user#policy_id OrganizationUser#policy_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### OrganizationUserPoliciesList <a name="OrganizationUserPoliciesList" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/organizationuser"

organizationuser.NewOrganizationUserPoliciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OrganizationUserPoliciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.get"></a>

```go
func Get(index *f64) OrganizationUserPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OrganizationUserPoliciesOutputReference <a name="OrganizationUserPoliciesOutputReference" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/organizationuser"

organizationuser.NewOrganizationUserPoliciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OrganizationUserPoliciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.property.policyAccountIdsInput">PolicyAccountIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.property.policyIdInput">PolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.property.policyAccountIds">PolicyAccountIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PolicyAccountIdsInput`<sup>Optional</sup> <a name="PolicyAccountIdsInput" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.property.policyAccountIdsInput"></a>

```go
func PolicyAccountIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.property.policyIdInput"></a>

```go
func PolicyIdInput() *string
```

- *Type:* *string

---

##### `PolicyAccountIds`<sup>Required</sup> <a name="PolicyAccountIds" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.property.policyAccountIds"></a>

```go
func PolicyAccountIds() *[]*string
```

- *Type:* *[]*string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



