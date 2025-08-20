# `notificationCenter` Submodule <a name="`notificationCenter` Submodule" id="@cdktf/provider-spotinst.notificationCenter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationCenter <a name="NotificationCenter" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.225.1/docs/resources/notification_center spotinst_notification_center}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/notificationcenter"

notificationcenter.NewNotificationCenter(scope Construct, id *string, config NotificationCenterConfig) NotificationCenter
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig">NotificationCenterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig">NotificationCenterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putComputePolicyConfig">PutComputePolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putRegisteredUsers">PutRegisteredUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putSubscriptions">PutSubscriptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetIsActive">ResetIsActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetRegisteredUsers">ResetRegisteredUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetSubscriptions">ResetSubscriptions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutComputePolicyConfig` <a name="PutComputePolicyConfig" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putComputePolicyConfig"></a>

```go
func PutComputePolicyConfig(value NotificationCenterComputePolicyConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putComputePolicyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig">NotificationCenterComputePolicyConfig</a>

---

##### `PutRegisteredUsers` <a name="PutRegisteredUsers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putRegisteredUsers"></a>

```go
func PutRegisteredUsers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putRegisteredUsers.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSubscriptions` <a name="PutSubscriptions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putSubscriptions"></a>

```go
func PutSubscriptions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putSubscriptions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetId"></a>

```go
func ResetId()
```

##### `ResetIsActive` <a name="ResetIsActive" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetIsActive"></a>

```go
func ResetIsActive()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetName"></a>

```go
func ResetName()
```

##### `ResetRegisteredUsers` <a name="ResetRegisteredUsers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetRegisteredUsers"></a>

```go
func ResetRegisteredUsers()
```

##### `ResetSubscriptions` <a name="ResetSubscriptions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetSubscriptions"></a>

```go
func ResetSubscriptions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NotificationCenter resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/notificationcenter"

notificationcenter.NotificationCenter_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/notificationcenter"

notificationcenter.NotificationCenter_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/notificationcenter"

notificationcenter.NotificationCenter_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/notificationcenter"

notificationcenter.NotificationCenter_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NotificationCenter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NotificationCenter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NotificationCenter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.225.1/docs/resources/notification_center#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NotificationCenter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.computePolicyConfig">ComputePolicyConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference">NotificationCenterComputePolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.registeredUsers">RegisteredUsers</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList">NotificationCenterRegisteredUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.subscriptions">Subscriptions</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList">NotificationCenterSubscriptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.computePolicyConfigInput">ComputePolicyConfigInput</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig">NotificationCenterComputePolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.isActiveInput">IsActiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.privacyLevelInput">PrivacyLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.registeredUsersInput">RegisteredUsersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.subscriptionsInput">SubscriptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.isActive">IsActive</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.privacyLevel">PrivacyLevel</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ComputePolicyConfig`<sup>Required</sup> <a name="ComputePolicyConfig" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.computePolicyConfig"></a>

```go
func ComputePolicyConfig() NotificationCenterComputePolicyConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference">NotificationCenterComputePolicyConfigOutputReference</a>

---

##### `RegisteredUsers`<sup>Required</sup> <a name="RegisteredUsers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.registeredUsers"></a>

```go
func RegisteredUsers() NotificationCenterRegisteredUsersList
```

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList">NotificationCenterRegisteredUsersList</a>

---

##### `Subscriptions`<sup>Required</sup> <a name="Subscriptions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.subscriptions"></a>

```go
func Subscriptions() NotificationCenterSubscriptionsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList">NotificationCenterSubscriptionsList</a>

---

##### `ComputePolicyConfigInput`<sup>Optional</sup> <a name="ComputePolicyConfigInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.computePolicyConfigInput"></a>

```go
func ComputePolicyConfigInput() NotificationCenterComputePolicyConfig
```

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig">NotificationCenterComputePolicyConfig</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsActiveInput`<sup>Optional</sup> <a name="IsActiveInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.isActiveInput"></a>

```go
func IsActiveInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrivacyLevelInput`<sup>Optional</sup> <a name="PrivacyLevelInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.privacyLevelInput"></a>

```go
func PrivacyLevelInput() *string
```

- *Type:* *string

---

##### `RegisteredUsersInput`<sup>Optional</sup> <a name="RegisteredUsersInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.registeredUsersInput"></a>

```go
func RegisteredUsersInput() interface{}
```

- *Type:* interface{}

---

##### `SubscriptionsInput`<sup>Optional</sup> <a name="SubscriptionsInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.subscriptionsInput"></a>

```go
func SubscriptionsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsActive`<sup>Required</sup> <a name="IsActive" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.isActive"></a>

```go
func IsActive() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrivacyLevel`<sup>Required</sup> <a name="PrivacyLevel" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.privacyLevel"></a>

```go
func PrivacyLevel() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationCenterComputePolicyConfig <a name="NotificationCenterComputePolicyConfig" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/notificationcenter"

&notificationcenter.NotificationCenterComputePolicyConfig {
	Events: interface{},
	DynamicRules: interface{},
	ResourceIds: *[]*string,
	ShouldIncludeAllResources: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig.property.events">Events</a></code> | <code>interface{}</code> | events block. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig.property.dynamicRules">DynamicRules</a></code> | <code>interface{}</code> | dynamic_rules block. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig.property.resourceIds">ResourceIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.225.1/docs/resources/notification_center#resource_ids NotificationCenter#resource_ids}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig.property.shouldIncludeAllResources">ShouldIncludeAllResources</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.225.1/docs/resources/notification_center#should_include_all_resources NotificationCenter#should_include_all_resources}. |

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig.property.events"></a>

```go
Events interface{}
```

- *Type:* interface{}

events block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.225.1/docs/resources/notification_center#events NotificationCenter#events}

---

##### `DynamicRules`<sup>Optional</sup> <a name="DynamicRules" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig.property.dynamicRules"></a>

```go
DynamicRules interface{}
```

- *Type:* interface{}

dynamic_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.225.1/docs/resources/notification_center#dynamic_rules NotificationCenter#dynamic_rules}

---

##### `ResourceIds`<sup>Optional</sup> <a name="ResourceIds" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig.property.resourceIds"></a>

```go
ResourceIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.225.1/docs/resources/notification_center#resource_ids NotificationCenter#resource_ids}.

---

##### `ShouldIncludeAllResources`<sup>Optional</sup> <a name="ShouldIncludeAllResources" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig.property.shouldIncludeAllResources"></a>

```go
ShouldIncludeAllResources interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.225.1/docs/resources/notification_center#should_include_all_resources NotificationCenter#should_include_all_resources}.

---

### NotificationCenterComputePolicyConfigDynamicRules <a name="NotificationCenterComputePolicyConfigDynamicRules" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/notificationcenter"

&notificationcenter.NotificationCenterComputePolicyConfigDynamicRules {
	FilterConditions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules.property.filterConditions">FilterConditions</a></code> | <code>interface{}</code> | filter_conditions block. |

---

##### `FilterConditions`<sup>Optional</sup> <a name="FilterConditions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules.property.filterConditions"></a>

```go
FilterConditions interface{}
```

- *Type:* interface{}

filter_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.225.1/docs/resources/notification_center#filter_conditions NotificationCenter#filter_conditions}

---

### NotificationCenterComputePolicyConfigDynamicRulesFilterConditions <a name="NotificationCenterComputePolicyConfigDynamicRulesFilterConditions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/notificationcenter"

&notificationcenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions {
	Expression: *string,
	Identifier: *string,
	Operator: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.225.1/docs/resources/notification_center#expression NotificationCenter#expression}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions.property.identifier">Identifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.225.1/docs/resources/notification_center#identifier NotificationCenter#identifier}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.225.1/docs/resources/notification_center#operator NotificationCenter#operator}. |

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.225.1/docs/resources/notification_center#expression NotificationCenter#expression}.

---

##### `Identifier`<sup>Optional</sup> <a name="Identifier" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions.property.identifier"></a>

```go
Identifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.225.1/docs/resources/notification_center#identifier NotificationCenter#identifier}.

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.225.1/docs/resources/notification_center#operator NotificationCenter#operator}.

---

### NotificationCenterComputePolicyConfigEvents <a name="NotificationCenterComputePolicyConfigEvents" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/notificationcenter"

&notificationcenter.NotificationCenterComputePolicyConfigEvents {
	Event: *string,
	EventType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents.property.event">Event</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.225.1/docs/resources/notification_center#event NotificationCenter#event}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents.property.eventType">EventType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.225.1/docs/resources/notification_center#event_type NotificationCenter#event_type}. |

---

##### `Event`<sup>Optional</sup> <a name="Event" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents.property.event"></a>

```go
Event *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.225.1/docs/resources/notification_center#event NotificationCenter#event}.

---

##### `EventType`<sup>Optional</sup> <a name="EventType" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents.property.eventType"></a>

```go
EventType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.225.1/docs/resources/notification_center#event_type NotificationCenter#event_type}.

---

### NotificationCenterConfig <a name="NotificationCenterConfig" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/notificationcenter"

&notificationcenter.NotificationCenterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ComputePolicyConfig: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14.notificationCenter.NotificationCenterComputePolicyConfig,
	PrivacyLevel: *string,
	Description: *string,
	Id: *string,
	IsActive: interface{},
	Name: *string,
	RegisteredUsers: interface{},
	Subscriptions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.computePolicyConfig">ComputePolicyConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig">NotificationCenterComputePolicyConfig</a></code> | compute_policy_config block. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.privacyLevel">PrivacyLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.225.1/docs/resources/notification_center#privacy_level NotificationCenter#privacy_level}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.225.1/docs/resources/notification_center#description NotificationCenter#description}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.225.1/docs/resources/notification_center#id NotificationCenter#id}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.isActive">IsActive</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.225.1/docs/resources/notification_center#is_active NotificationCenter#is_active}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.225.1/docs/resources/notification_center#name NotificationCenter#name}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.registeredUsers">RegisteredUsers</a></code> | <code>interface{}</code> | registered_users block. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.subscriptions">Subscriptions</a></code> | <code>interface{}</code> | subscriptions block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ComputePolicyConfig`<sup>Required</sup> <a name="ComputePolicyConfig" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.computePolicyConfig"></a>

```go
ComputePolicyConfig NotificationCenterComputePolicyConfig
```

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig">NotificationCenterComputePolicyConfig</a>

compute_policy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.225.1/docs/resources/notification_center#compute_policy_config NotificationCenter#compute_policy_config}

---

##### `PrivacyLevel`<sup>Required</sup> <a name="PrivacyLevel" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.privacyLevel"></a>

```go
PrivacyLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.225.1/docs/resources/notification_center#privacy_level NotificationCenter#privacy_level}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.225.1/docs/resources/notification_center#description NotificationCenter#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.225.1/docs/resources/notification_center#id NotificationCenter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsActive`<sup>Optional</sup> <a name="IsActive" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.isActive"></a>

```go
IsActive interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.225.1/docs/resources/notification_center#is_active NotificationCenter#is_active}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.225.1/docs/resources/notification_center#name NotificationCenter#name}.

---

##### `RegisteredUsers`<sup>Optional</sup> <a name="RegisteredUsers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.registeredUsers"></a>

```go
RegisteredUsers interface{}
```

- *Type:* interface{}

registered_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.225.1/docs/resources/notification_center#registered_users NotificationCenter#registered_users}

---

##### `Subscriptions`<sup>Optional</sup> <a name="Subscriptions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.subscriptions"></a>

```go
Subscriptions interface{}
```

- *Type:* interface{}

subscriptions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.225.1/docs/resources/notification_center#subscriptions NotificationCenter#subscriptions}

---

### NotificationCenterRegisteredUsers <a name="NotificationCenterRegisteredUsers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/notificationcenter"

&notificationcenter.NotificationCenterRegisteredUsers {
	SubscriptionTypes: *[]*string,
	UserEmail: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers.property.subscriptionTypes">SubscriptionTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.225.1/docs/resources/notification_center#subscription_types NotificationCenter#subscription_types}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers.property.userEmail">UserEmail</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.225.1/docs/resources/notification_center#user_email NotificationCenter#user_email}. |

---

##### `SubscriptionTypes`<sup>Optional</sup> <a name="SubscriptionTypes" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers.property.subscriptionTypes"></a>

```go
SubscriptionTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.225.1/docs/resources/notification_center#subscription_types NotificationCenter#subscription_types}.

---

##### `UserEmail`<sup>Optional</sup> <a name="UserEmail" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers.property.userEmail"></a>

```go
UserEmail *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.225.1/docs/resources/notification_center#user_email NotificationCenter#user_email}.

---

### NotificationCenterSubscriptions <a name="NotificationCenterSubscriptions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/notificationcenter"

&notificationcenter.NotificationCenterSubscriptions {
	Endpoint: *string,
	SubscriptionType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions.property.endpoint">Endpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.225.1/docs/resources/notification_center#endpoint NotificationCenter#endpoint}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions.property.subscriptionType">SubscriptionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.225.1/docs/resources/notification_center#subscription_type NotificationCenter#subscription_type}. |

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.225.1/docs/resources/notification_center#endpoint NotificationCenter#endpoint}.

---

##### `SubscriptionType`<sup>Optional</sup> <a name="SubscriptionType" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions.property.subscriptionType"></a>

```go
SubscriptionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.225.1/docs/resources/notification_center#subscription_type NotificationCenter#subscription_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList <a name="NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/notificationcenter"

notificationcenter.NewNotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.get"></a>

```go
func Get(index *f64) NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference <a name="NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/notificationcenter"

notificationcenter.NewNotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.resetIdentifier">ResetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpression` <a name="ResetExpression" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.resetExpression"></a>

```go
func ResetExpression()
```

##### `ResetIdentifier` <a name="ResetIdentifier" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.resetIdentifier"></a>

```go
func ResetIdentifier()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.resetOperator"></a>

```go
func ResetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.identifierInput"></a>

```go
func IdentifierInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NotificationCenterComputePolicyConfigDynamicRulesList <a name="NotificationCenterComputePolicyConfigDynamicRulesList" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/notificationcenter"

notificationcenter.NewNotificationCenterComputePolicyConfigDynamicRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NotificationCenterComputePolicyConfigDynamicRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.get"></a>

```go
func Get(index *f64) NotificationCenterComputePolicyConfigDynamicRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NotificationCenterComputePolicyConfigDynamicRulesOutputReference <a name="NotificationCenterComputePolicyConfigDynamicRulesOutputReference" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/notificationcenter"

notificationcenter.NewNotificationCenterComputePolicyConfigDynamicRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NotificationCenterComputePolicyConfigDynamicRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.putFilterConditions">PutFilterConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.resetFilterConditions">ResetFilterConditions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilterConditions` <a name="PutFilterConditions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.putFilterConditions"></a>

```go
func PutFilterConditions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.putFilterConditions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilterConditions` <a name="ResetFilterConditions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.resetFilterConditions"></a>

```go
func ResetFilterConditions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.filterConditions">FilterConditions</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList">NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.filterConditionsInput">FilterConditionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FilterConditions`<sup>Required</sup> <a name="FilterConditions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.filterConditions"></a>

```go
func FilterConditions() NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList">NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList</a>

---

##### `FilterConditionsInput`<sup>Optional</sup> <a name="FilterConditionsInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.filterConditionsInput"></a>

```go
func FilterConditionsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NotificationCenterComputePolicyConfigEventsList <a name="NotificationCenterComputePolicyConfigEventsList" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/notificationcenter"

notificationcenter.NewNotificationCenterComputePolicyConfigEventsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NotificationCenterComputePolicyConfigEventsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.get"></a>

```go
func Get(index *f64) NotificationCenterComputePolicyConfigEventsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NotificationCenterComputePolicyConfigEventsOutputReference <a name="NotificationCenterComputePolicyConfigEventsOutputReference" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/notificationcenter"

notificationcenter.NewNotificationCenterComputePolicyConfigEventsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NotificationCenterComputePolicyConfigEventsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.resetEvent">ResetEvent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.resetEventType">ResetEventType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEvent` <a name="ResetEvent" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.resetEvent"></a>

```go
func ResetEvent()
```

##### `ResetEventType` <a name="ResetEventType" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.resetEventType"></a>

```go
func ResetEventType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.eventInput">EventInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.eventTypeInput">EventTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.event">Event</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.eventType">EventType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EventInput`<sup>Optional</sup> <a name="EventInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.eventInput"></a>

```go
func EventInput() *string
```

- *Type:* *string

---

##### `EventTypeInput`<sup>Optional</sup> <a name="EventTypeInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.eventTypeInput"></a>

```go
func EventTypeInput() *string
```

- *Type:* *string

---

##### `Event`<sup>Required</sup> <a name="Event" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.event"></a>

```go
func Event() *string
```

- *Type:* *string

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.eventType"></a>

```go
func EventType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NotificationCenterComputePolicyConfigOutputReference <a name="NotificationCenterComputePolicyConfigOutputReference" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/notificationcenter"

notificationcenter.NewNotificationCenterComputePolicyConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NotificationCenterComputePolicyConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.putDynamicRules">PutDynamicRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.putEvents">PutEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.resetDynamicRules">ResetDynamicRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.resetResourceIds">ResetResourceIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.resetShouldIncludeAllResources">ResetShouldIncludeAllResources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDynamicRules` <a name="PutDynamicRules" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.putDynamicRules"></a>

```go
func PutDynamicRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.putDynamicRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEvents` <a name="PutEvents" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.putEvents"></a>

```go
func PutEvents(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.putEvents.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDynamicRules` <a name="ResetDynamicRules" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.resetDynamicRules"></a>

```go
func ResetDynamicRules()
```

##### `ResetResourceIds` <a name="ResetResourceIds" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.resetResourceIds"></a>

```go
func ResetResourceIds()
```

##### `ResetShouldIncludeAllResources` <a name="ResetShouldIncludeAllResources" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.resetShouldIncludeAllResources"></a>

```go
func ResetShouldIncludeAllResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.dynamicRules">DynamicRules</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList">NotificationCenterComputePolicyConfigDynamicRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.events">Events</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList">NotificationCenterComputePolicyConfigEventsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.dynamicRulesInput">DynamicRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.eventsInput">EventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.resourceIdsInput">ResourceIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.shouldIncludeAllResourcesInput">ShouldIncludeAllResourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.resourceIds">ResourceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.shouldIncludeAllResources">ShouldIncludeAllResources</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig">NotificationCenterComputePolicyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DynamicRules`<sup>Required</sup> <a name="DynamicRules" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.dynamicRules"></a>

```go
func DynamicRules() NotificationCenterComputePolicyConfigDynamicRulesList
```

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList">NotificationCenterComputePolicyConfigDynamicRulesList</a>

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.events"></a>

```go
func Events() NotificationCenterComputePolicyConfigEventsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList">NotificationCenterComputePolicyConfigEventsList</a>

---

##### `DynamicRulesInput`<sup>Optional</sup> <a name="DynamicRulesInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.dynamicRulesInput"></a>

```go
func DynamicRulesInput() interface{}
```

- *Type:* interface{}

---

##### `EventsInput`<sup>Optional</sup> <a name="EventsInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.eventsInput"></a>

```go
func EventsInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceIdsInput`<sup>Optional</sup> <a name="ResourceIdsInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.resourceIdsInput"></a>

```go
func ResourceIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ShouldIncludeAllResourcesInput`<sup>Optional</sup> <a name="ShouldIncludeAllResourcesInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.shouldIncludeAllResourcesInput"></a>

```go
func ShouldIncludeAllResourcesInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceIds`<sup>Required</sup> <a name="ResourceIds" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.resourceIds"></a>

```go
func ResourceIds() *[]*string
```

- *Type:* *[]*string

---

##### `ShouldIncludeAllResources`<sup>Required</sup> <a name="ShouldIncludeAllResources" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.shouldIncludeAllResources"></a>

```go
func ShouldIncludeAllResources() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() NotificationCenterComputePolicyConfig
```

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig">NotificationCenterComputePolicyConfig</a>

---


### NotificationCenterRegisteredUsersList <a name="NotificationCenterRegisteredUsersList" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/notificationcenter"

notificationcenter.NewNotificationCenterRegisteredUsersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NotificationCenterRegisteredUsersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.get"></a>

```go
func Get(index *f64) NotificationCenterRegisteredUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NotificationCenterRegisteredUsersOutputReference <a name="NotificationCenterRegisteredUsersOutputReference" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/notificationcenter"

notificationcenter.NewNotificationCenterRegisteredUsersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NotificationCenterRegisteredUsersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.resetSubscriptionTypes">ResetSubscriptionTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.resetUserEmail">ResetUserEmail</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSubscriptionTypes` <a name="ResetSubscriptionTypes" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.resetSubscriptionTypes"></a>

```go
func ResetSubscriptionTypes()
```

##### `ResetUserEmail` <a name="ResetUserEmail" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.resetUserEmail"></a>

```go
func ResetUserEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.subscriptionTypesInput">SubscriptionTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.userEmailInput">UserEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.subscriptionTypes">SubscriptionTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.userEmail">UserEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SubscriptionTypesInput`<sup>Optional</sup> <a name="SubscriptionTypesInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.subscriptionTypesInput"></a>

```go
func SubscriptionTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `UserEmailInput`<sup>Optional</sup> <a name="UserEmailInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.userEmailInput"></a>

```go
func UserEmailInput() *string
```

- *Type:* *string

---

##### `SubscriptionTypes`<sup>Required</sup> <a name="SubscriptionTypes" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.subscriptionTypes"></a>

```go
func SubscriptionTypes() *[]*string
```

- *Type:* *[]*string

---

##### `UserEmail`<sup>Required</sup> <a name="UserEmail" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.userEmail"></a>

```go
func UserEmail() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NotificationCenterSubscriptionsList <a name="NotificationCenterSubscriptionsList" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/notificationcenter"

notificationcenter.NewNotificationCenterSubscriptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NotificationCenterSubscriptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.get"></a>

```go
func Get(index *f64) NotificationCenterSubscriptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NotificationCenterSubscriptionsOutputReference <a name="NotificationCenterSubscriptionsOutputReference" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/notificationcenter"

notificationcenter.NewNotificationCenterSubscriptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NotificationCenterSubscriptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.resetSubscriptionType">ResetSubscriptionType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.resetEndpoint"></a>

```go
func ResetEndpoint()
```

##### `ResetSubscriptionType` <a name="ResetSubscriptionType" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.resetSubscriptionType"></a>

```go
func ResetSubscriptionType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.subscriptionTypeInput">SubscriptionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.subscriptionType">SubscriptionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `SubscriptionTypeInput`<sup>Optional</sup> <a name="SubscriptionTypeInput" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.subscriptionTypeInput"></a>

```go
func SubscriptionTypeInput() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `SubscriptionType`<sup>Required</sup> <a name="SubscriptionType" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.subscriptionType"></a>

```go
func SubscriptionType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



