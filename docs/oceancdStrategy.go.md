# `oceancdStrategy` Submodule <a name="`oceancdStrategy` Submodule" id="@cdktf/provider-spotinst.oceancdStrategy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceancdStrategy <a name="OceancdStrategy" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy spotinst_oceancd_strategy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdstrategy"

oceancdstrategy.NewOceancdStrategy(scope Construct, id *string, config OceancdStrategyConfig) OceancdStrategy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig">OceancdStrategyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig">OceancdStrategyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.putCanary">PutCanary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.putRolling">PutRolling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.resetCanary">ResetCanary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.resetRolling">ResetRolling</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCanary` <a name="PutCanary" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.putCanary"></a>

```go
func PutCanary(value OceancdStrategyCanary)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.putCanary.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary">OceancdStrategyCanary</a>

---

##### `PutRolling` <a name="PutRolling" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.putRolling"></a>

```go
func PutRolling(value OceancdStrategyRolling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.putRolling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRolling">OceancdStrategyRolling</a>

---

##### `ResetCanary` <a name="ResetCanary" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.resetCanary"></a>

```go
func ResetCanary()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.resetId"></a>

```go
func ResetId()
```

##### `ResetRolling` <a name="ResetRolling" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.resetRolling"></a>

```go
func ResetRolling()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OceancdStrategy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdstrategy"

oceancdstrategy.OceancdStrategy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdstrategy"

oceancdstrategy.OceancdStrategy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdstrategy"

oceancdstrategy.OceancdStrategy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdstrategy"

oceancdstrategy.OceancdStrategy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OceancdStrategy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OceancdStrategy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OceancdStrategy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OceancdStrategy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.canary">Canary</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference">OceancdStrategyCanaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.rolling">Rolling</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference">OceancdStrategyRollingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.canaryInput">CanaryInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary">OceancdStrategyCanary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.rollingInput">RollingInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRolling">OceancdStrategyRolling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.strategyNameInput">StrategyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.strategyName">StrategyName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Canary`<sup>Required</sup> <a name="Canary" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.canary"></a>

```go
func Canary() OceancdStrategyCanaryOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference">OceancdStrategyCanaryOutputReference</a>

---

##### `Rolling`<sup>Required</sup> <a name="Rolling" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.rolling"></a>

```go
func Rolling() OceancdStrategyRollingOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference">OceancdStrategyRollingOutputReference</a>

---

##### `CanaryInput`<sup>Optional</sup> <a name="CanaryInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.canaryInput"></a>

```go
func CanaryInput() OceancdStrategyCanary
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary">OceancdStrategyCanary</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RollingInput`<sup>Optional</sup> <a name="RollingInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.rollingInput"></a>

```go
func RollingInput() OceancdStrategyRolling
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRolling">OceancdStrategyRolling</a>

---

##### `StrategyNameInput`<sup>Optional</sup> <a name="StrategyNameInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.strategyNameInput"></a>

```go
func StrategyNameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `StrategyName`<sup>Required</sup> <a name="StrategyName" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.strategyName"></a>

```go
func StrategyName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OceancdStrategyCanary <a name="OceancdStrategyCanary" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdstrategy"

&oceancdstrategy.OceancdStrategyCanary {
	Steps: interface{},
	BackgroundVerification: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerification,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary.property.steps">Steps</a></code> | <code>interface{}</code> | steps block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary.property.backgroundVerification">BackgroundVerification</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerification">OceancdStrategyCanaryBackgroundVerification</a></code> | background_verification block. |

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary.property.steps"></a>

```go
Steps interface{}
```

- *Type:* interface{}

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#steps OceancdStrategy#steps}

---

##### `BackgroundVerification`<sup>Optional</sup> <a name="BackgroundVerification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary.property.backgroundVerification"></a>

```go
BackgroundVerification OceancdStrategyCanaryBackgroundVerification
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerification">OceancdStrategyCanaryBackgroundVerification</a>

background_verification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#background_verification OceancdStrategy#background_verification}

---

### OceancdStrategyCanaryBackgroundVerification <a name="OceancdStrategyCanaryBackgroundVerification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdstrategy"

&oceancdstrategy.OceancdStrategyCanaryBackgroundVerification {
	TemplateNames: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerification.property.templateNames">TemplateNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#template_names OceancdStrategy#template_names}. |

---

##### `TemplateNames`<sup>Required</sup> <a name="TemplateNames" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerification.property.templateNames"></a>

```go
TemplateNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#template_names OceancdStrategy#template_names}.

---

### OceancdStrategyCanarySteps <a name="OceancdStrategyCanarySteps" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdstrategy"

&oceancdstrategy.OceancdStrategyCanarySteps {
	Pause: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPause,
	SetCanaryScale: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale,
	SetHeaderRoute: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute,
	SetWeight: *f64,
	StepName: *string,
	Verification: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerification,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.pause">Pause</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPause">OceancdStrategyCanaryStepsPause</a></code> | pause block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.setCanaryScale">SetCanaryScale</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale">OceancdStrategyCanaryStepsSetCanaryScale</a></code> | set_canary_scale block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.setHeaderRoute">SetHeaderRoute</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute">OceancdStrategyCanaryStepsSetHeaderRoute</a></code> | set_header_route block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.setWeight">SetWeight</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#set_weight OceancdStrategy#set_weight}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.stepName">StepName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#step_name OceancdStrategy#step_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.verification">Verification</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerification">OceancdStrategyCanaryStepsVerification</a></code> | verification block. |

---

##### `Pause`<sup>Optional</sup> <a name="Pause" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.pause"></a>

```go
Pause OceancdStrategyCanaryStepsPause
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPause">OceancdStrategyCanaryStepsPause</a>

pause block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#pause OceancdStrategy#pause}

---

##### `SetCanaryScale`<sup>Optional</sup> <a name="SetCanaryScale" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.setCanaryScale"></a>

```go
SetCanaryScale OceancdStrategyCanaryStepsSetCanaryScale
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale">OceancdStrategyCanaryStepsSetCanaryScale</a>

set_canary_scale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#set_canary_scale OceancdStrategy#set_canary_scale}

---

##### `SetHeaderRoute`<sup>Optional</sup> <a name="SetHeaderRoute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.setHeaderRoute"></a>

```go
SetHeaderRoute OceancdStrategyCanaryStepsSetHeaderRoute
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute">OceancdStrategyCanaryStepsSetHeaderRoute</a>

set_header_route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#set_header_route OceancdStrategy#set_header_route}

---

##### `SetWeight`<sup>Optional</sup> <a name="SetWeight" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.setWeight"></a>

```go
SetWeight *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#set_weight OceancdStrategy#set_weight}.

---

##### `StepName`<sup>Optional</sup> <a name="StepName" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.stepName"></a>

```go
StepName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#step_name OceancdStrategy#step_name}.

---

##### `Verification`<sup>Optional</sup> <a name="Verification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.verification"></a>

```go
Verification OceancdStrategyCanaryStepsVerification
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerification">OceancdStrategyCanaryStepsVerification</a>

verification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#verification OceancdStrategy#verification}

---

### OceancdStrategyCanaryStepsPause <a name="OceancdStrategyCanaryStepsPause" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPause"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPause.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdstrategy"

&oceancdstrategy.OceancdStrategyCanaryStepsPause {
	Duration: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPause.property.duration">Duration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#duration OceancdStrategy#duration}. |

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPause.property.duration"></a>

```go
Duration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#duration OceancdStrategy#duration}.

---

### OceancdStrategyCanaryStepsSetCanaryScale <a name="OceancdStrategyCanaryStepsSetCanaryScale" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdstrategy"

&oceancdstrategy.OceancdStrategyCanaryStepsSetCanaryScale {
	MatchTrafficWeight: interface{},
	Replicas: *f64,
	Weight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale.property.matchTrafficWeight">MatchTrafficWeight</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#match_traffic_weight OceancdStrategy#match_traffic_weight}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale.property.replicas">Replicas</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#replicas OceancdStrategy#replicas}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale.property.weight">Weight</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#weight OceancdStrategy#weight}. |

---

##### `MatchTrafficWeight`<sup>Optional</sup> <a name="MatchTrafficWeight" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale.property.matchTrafficWeight"></a>

```go
MatchTrafficWeight interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#match_traffic_weight OceancdStrategy#match_traffic_weight}.

---

##### `Replicas`<sup>Optional</sup> <a name="Replicas" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale.property.replicas"></a>

```go
Replicas *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#replicas OceancdStrategy#replicas}.

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#weight OceancdStrategy#weight}.

---

### OceancdStrategyCanaryStepsSetHeaderRoute <a name="OceancdStrategyCanaryStepsSetHeaderRoute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdstrategy"

&oceancdstrategy.OceancdStrategyCanaryStepsSetHeaderRoute {
	HeaderRouteName: *string,
	Match: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute.property.headerRouteName">HeaderRouteName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#header_route_name OceancdStrategy#header_route_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute.property.match">Match</a></code> | <code>interface{}</code> | match block. |

---

##### `HeaderRouteName`<sup>Required</sup> <a name="HeaderRouteName" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute.property.headerRouteName"></a>

```go
HeaderRouteName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#header_route_name OceancdStrategy#header_route_name}.

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute.property.match"></a>

```go
Match interface{}
```

- *Type:* interface{}

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#match OceancdStrategy#match}

---

### OceancdStrategyCanaryStepsSetHeaderRouteMatch <a name="OceancdStrategyCanaryStepsSetHeaderRouteMatch" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdstrategy"

&oceancdstrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch {
	HeaderName: *string,
	HeaderValue: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch.property.headerName">HeaderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#header_name OceancdStrategy#header_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch.property.headerValue">HeaderValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue">OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue</a></code> | header_value block. |

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch.property.headerName"></a>

```go
HeaderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#header_name OceancdStrategy#header_name}.

---

##### `HeaderValue`<sup>Required</sup> <a name="HeaderValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch.property.headerValue"></a>

```go
HeaderValue OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue">OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue</a>

header_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#header_value OceancdStrategy#header_value}

---

### OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue <a name="OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdstrategy"

&oceancdstrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue {
	Exact: *string,
	Prefix: *string,
	Regex: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue.property.exact">Exact</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#exact OceancdStrategy#exact}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue.property.prefix">Prefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#prefix OceancdStrategy#prefix}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue.property.regex">Regex</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#regex OceancdStrategy#regex}. |

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue.property.exact"></a>

```go
Exact *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#exact OceancdStrategy#exact}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#prefix OceancdStrategy#prefix}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue.property.regex"></a>

```go
Regex *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#regex OceancdStrategy#regex}.

---

### OceancdStrategyCanaryStepsVerification <a name="OceancdStrategyCanaryStepsVerification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdstrategy"

&oceancdstrategy.OceancdStrategyCanaryStepsVerification {
	TemplateNames: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerification.property.templateNames">TemplateNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#template_names OceancdStrategy#template_names}. |

---

##### `TemplateNames`<sup>Required</sup> <a name="TemplateNames" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerification.property.templateNames"></a>

```go
TemplateNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#template_names OceancdStrategy#template_names}.

---

### OceancdStrategyConfig <a name="OceancdStrategyConfig" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdstrategy"

&oceancdstrategy.OceancdStrategyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	StrategyName: *string,
	Canary: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceancdStrategy.OceancdStrategyCanary,
	Id: *string,
	Rolling: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceancdStrategy.OceancdStrategyRolling,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.strategyName">StrategyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#strategy_name OceancdStrategy#strategy_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.canary">Canary</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary">OceancdStrategyCanary</a></code> | canary block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#id OceancdStrategy#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.rolling">Rolling</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRolling">OceancdStrategyRolling</a></code> | rolling block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `StrategyName`<sup>Required</sup> <a name="StrategyName" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.strategyName"></a>

```go
StrategyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#strategy_name OceancdStrategy#strategy_name}.

---

##### `Canary`<sup>Optional</sup> <a name="Canary" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.canary"></a>

```go
Canary OceancdStrategyCanary
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary">OceancdStrategyCanary</a>

canary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#canary OceancdStrategy#canary}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#id OceancdStrategy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Rolling`<sup>Optional</sup> <a name="Rolling" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.rolling"></a>

```go
Rolling OceancdStrategyRolling
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRolling">OceancdStrategyRolling</a>

rolling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#rolling OceancdStrategy#rolling}

---

### OceancdStrategyRolling <a name="OceancdStrategyRolling" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRolling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRolling.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdstrategy"

&oceancdstrategy.OceancdStrategyRolling {
	Steps: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRolling.property.steps">Steps</a></code> | <code>interface{}</code> | steps block. |

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRolling.property.steps"></a>

```go
Steps interface{}
```

- *Type:* interface{}

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#steps OceancdStrategy#steps}

---

### OceancdStrategyRollingSteps <a name="OceancdStrategyRollingSteps" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdstrategy"

&oceancdstrategy.OceancdStrategyRollingSteps {
	Pause: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceancdStrategy.OceancdStrategyRollingStepsPause,
	StepsName: *string,
	Verification: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerification,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps.property.pause">Pause</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPause">OceancdStrategyRollingStepsPause</a></code> | pause block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps.property.stepsName">StepsName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#steps_name OceancdStrategy#steps_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps.property.verification">Verification</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerification">OceancdStrategyRollingStepsVerification</a></code> | verification block. |

---

##### `Pause`<sup>Optional</sup> <a name="Pause" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps.property.pause"></a>

```go
Pause OceancdStrategyRollingStepsPause
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPause">OceancdStrategyRollingStepsPause</a>

pause block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#pause OceancdStrategy#pause}

---

##### `StepsName`<sup>Optional</sup> <a name="StepsName" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps.property.stepsName"></a>

```go
StepsName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#steps_name OceancdStrategy#steps_name}.

---

##### `Verification`<sup>Optional</sup> <a name="Verification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps.property.verification"></a>

```go
Verification OceancdStrategyRollingStepsVerification
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerification">OceancdStrategyRollingStepsVerification</a>

verification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#verification OceancdStrategy#verification}

---

### OceancdStrategyRollingStepsPause <a name="OceancdStrategyRollingStepsPause" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPause"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPause.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdstrategy"

&oceancdstrategy.OceancdStrategyRollingStepsPause {
	Duration: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPause.property.duration">Duration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#duration OceancdStrategy#duration}. |

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPause.property.duration"></a>

```go
Duration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#duration OceancdStrategy#duration}.

---

### OceancdStrategyRollingStepsVerification <a name="OceancdStrategyRollingStepsVerification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdstrategy"

&oceancdstrategy.OceancdStrategyRollingStepsVerification {
	TemplateNames: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerification.property.templateNames">TemplateNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#template_names OceancdStrategy#template_names}. |

---

##### `TemplateNames`<sup>Required</sup> <a name="TemplateNames" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerification.property.templateNames"></a>

```go
TemplateNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/oceancd_strategy#template_names OceancdStrategy#template_names}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceancdStrategyCanaryBackgroundVerificationOutputReference <a name="OceancdStrategyCanaryBackgroundVerificationOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdstrategy"

oceancdstrategy.NewOceancdStrategyCanaryBackgroundVerificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdStrategyCanaryBackgroundVerificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.property.templateNamesInput">TemplateNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.property.templateNames">TemplateNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerification">OceancdStrategyCanaryBackgroundVerification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TemplateNamesInput`<sup>Optional</sup> <a name="TemplateNamesInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.property.templateNamesInput"></a>

```go
func TemplateNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TemplateNames`<sup>Required</sup> <a name="TemplateNames" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.property.templateNames"></a>

```go
func TemplateNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdStrategyCanaryBackgroundVerification
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerification">OceancdStrategyCanaryBackgroundVerification</a>

---


### OceancdStrategyCanaryOutputReference <a name="OceancdStrategyCanaryOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdstrategy"

oceancdstrategy.NewOceancdStrategyCanaryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdStrategyCanaryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.putBackgroundVerification">PutBackgroundVerification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.putSteps">PutSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.resetBackgroundVerification">ResetBackgroundVerification</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBackgroundVerification` <a name="PutBackgroundVerification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.putBackgroundVerification"></a>

```go
func PutBackgroundVerification(value OceancdStrategyCanaryBackgroundVerification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.putBackgroundVerification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerification">OceancdStrategyCanaryBackgroundVerification</a>

---

##### `PutSteps` <a name="PutSteps" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.putSteps"></a>

```go
func PutSteps(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.putSteps.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBackgroundVerification` <a name="ResetBackgroundVerification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.resetBackgroundVerification"></a>

```go
func ResetBackgroundVerification()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.backgroundVerification">BackgroundVerification</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference">OceancdStrategyCanaryBackgroundVerificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.steps">Steps</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList">OceancdStrategyCanaryStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.backgroundVerificationInput">BackgroundVerificationInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerification">OceancdStrategyCanaryBackgroundVerification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.stepsInput">StepsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary">OceancdStrategyCanary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackgroundVerification`<sup>Required</sup> <a name="BackgroundVerification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.backgroundVerification"></a>

```go
func BackgroundVerification() OceancdStrategyCanaryBackgroundVerificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference">OceancdStrategyCanaryBackgroundVerificationOutputReference</a>

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.steps"></a>

```go
func Steps() OceancdStrategyCanaryStepsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList">OceancdStrategyCanaryStepsList</a>

---

##### `BackgroundVerificationInput`<sup>Optional</sup> <a name="BackgroundVerificationInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.backgroundVerificationInput"></a>

```go
func BackgroundVerificationInput() OceancdStrategyCanaryBackgroundVerification
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerification">OceancdStrategyCanaryBackgroundVerification</a>

---

##### `StepsInput`<sup>Optional</sup> <a name="StepsInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.stepsInput"></a>

```go
func StepsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdStrategyCanary
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary">OceancdStrategyCanary</a>

---


### OceancdStrategyCanaryStepsList <a name="OceancdStrategyCanaryStepsList" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdstrategy"

oceancdstrategy.NewOceancdStrategyCanaryStepsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceancdStrategyCanaryStepsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.get"></a>

```go
func Get(index *f64) OceancdStrategyCanaryStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceancdStrategyCanaryStepsOutputReference <a name="OceancdStrategyCanaryStepsOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdstrategy"

oceancdstrategy.NewOceancdStrategyCanaryStepsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceancdStrategyCanaryStepsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putPause">PutPause</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putSetCanaryScale">PutSetCanaryScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putSetHeaderRoute">PutSetHeaderRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putVerification">PutVerification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetPause">ResetPause</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetSetCanaryScale">ResetSetCanaryScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetSetHeaderRoute">ResetSetHeaderRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetSetWeight">ResetSetWeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetStepName">ResetStepName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetVerification">ResetVerification</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPause` <a name="PutPause" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putPause"></a>

```go
func PutPause(value OceancdStrategyCanaryStepsPause)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putPause.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPause">OceancdStrategyCanaryStepsPause</a>

---

##### `PutSetCanaryScale` <a name="PutSetCanaryScale" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putSetCanaryScale"></a>

```go
func PutSetCanaryScale(value OceancdStrategyCanaryStepsSetCanaryScale)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putSetCanaryScale.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale">OceancdStrategyCanaryStepsSetCanaryScale</a>

---

##### `PutSetHeaderRoute` <a name="PutSetHeaderRoute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putSetHeaderRoute"></a>

```go
func PutSetHeaderRoute(value OceancdStrategyCanaryStepsSetHeaderRoute)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putSetHeaderRoute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute">OceancdStrategyCanaryStepsSetHeaderRoute</a>

---

##### `PutVerification` <a name="PutVerification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putVerification"></a>

```go
func PutVerification(value OceancdStrategyCanaryStepsVerification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putVerification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerification">OceancdStrategyCanaryStepsVerification</a>

---

##### `ResetPause` <a name="ResetPause" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetPause"></a>

```go
func ResetPause()
```

##### `ResetSetCanaryScale` <a name="ResetSetCanaryScale" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetSetCanaryScale"></a>

```go
func ResetSetCanaryScale()
```

##### `ResetSetHeaderRoute` <a name="ResetSetHeaderRoute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetSetHeaderRoute"></a>

```go
func ResetSetHeaderRoute()
```

##### `ResetSetWeight` <a name="ResetSetWeight" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetSetWeight"></a>

```go
func ResetSetWeight()
```

##### `ResetStepName` <a name="ResetStepName" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetStepName"></a>

```go
func ResetStepName()
```

##### `ResetVerification` <a name="ResetVerification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetVerification"></a>

```go
func ResetVerification()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.pause">Pause</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference">OceancdStrategyCanaryStepsPauseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setCanaryScale">SetCanaryScale</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference">OceancdStrategyCanaryStepsSetCanaryScaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setHeaderRoute">SetHeaderRoute</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference">OceancdStrategyCanaryStepsSetHeaderRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.verification">Verification</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference">OceancdStrategyCanaryStepsVerificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.pauseInput">PauseInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPause">OceancdStrategyCanaryStepsPause</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setCanaryScaleInput">SetCanaryScaleInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale">OceancdStrategyCanaryStepsSetCanaryScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setHeaderRouteInput">SetHeaderRouteInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute">OceancdStrategyCanaryStepsSetHeaderRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setWeightInput">SetWeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.stepNameInput">StepNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.verificationInput">VerificationInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerification">OceancdStrategyCanaryStepsVerification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setWeight">SetWeight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.stepName">StepName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Pause`<sup>Required</sup> <a name="Pause" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.pause"></a>

```go
func Pause() OceancdStrategyCanaryStepsPauseOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference">OceancdStrategyCanaryStepsPauseOutputReference</a>

---

##### `SetCanaryScale`<sup>Required</sup> <a name="SetCanaryScale" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setCanaryScale"></a>

```go
func SetCanaryScale() OceancdStrategyCanaryStepsSetCanaryScaleOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference">OceancdStrategyCanaryStepsSetCanaryScaleOutputReference</a>

---

##### `SetHeaderRoute`<sup>Required</sup> <a name="SetHeaderRoute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setHeaderRoute"></a>

```go
func SetHeaderRoute() OceancdStrategyCanaryStepsSetHeaderRouteOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference">OceancdStrategyCanaryStepsSetHeaderRouteOutputReference</a>

---

##### `Verification`<sup>Required</sup> <a name="Verification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.verification"></a>

```go
func Verification() OceancdStrategyCanaryStepsVerificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference">OceancdStrategyCanaryStepsVerificationOutputReference</a>

---

##### `PauseInput`<sup>Optional</sup> <a name="PauseInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.pauseInput"></a>

```go
func PauseInput() OceancdStrategyCanaryStepsPause
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPause">OceancdStrategyCanaryStepsPause</a>

---

##### `SetCanaryScaleInput`<sup>Optional</sup> <a name="SetCanaryScaleInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setCanaryScaleInput"></a>

```go
func SetCanaryScaleInput() OceancdStrategyCanaryStepsSetCanaryScale
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale">OceancdStrategyCanaryStepsSetCanaryScale</a>

---

##### `SetHeaderRouteInput`<sup>Optional</sup> <a name="SetHeaderRouteInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setHeaderRouteInput"></a>

```go
func SetHeaderRouteInput() OceancdStrategyCanaryStepsSetHeaderRoute
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute">OceancdStrategyCanaryStepsSetHeaderRoute</a>

---

##### `SetWeightInput`<sup>Optional</sup> <a name="SetWeightInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setWeightInput"></a>

```go
func SetWeightInput() *f64
```

- *Type:* *f64

---

##### `StepNameInput`<sup>Optional</sup> <a name="StepNameInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.stepNameInput"></a>

```go
func StepNameInput() *string
```

- *Type:* *string

---

##### `VerificationInput`<sup>Optional</sup> <a name="VerificationInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.verificationInput"></a>

```go
func VerificationInput() OceancdStrategyCanaryStepsVerification
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerification">OceancdStrategyCanaryStepsVerification</a>

---

##### `SetWeight`<sup>Required</sup> <a name="SetWeight" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setWeight"></a>

```go
func SetWeight() *f64
```

- *Type:* *f64

---

##### `StepName`<sup>Required</sup> <a name="StepName" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.stepName"></a>

```go
func StepName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceancdStrategyCanaryStepsPauseOutputReference <a name="OceancdStrategyCanaryStepsPauseOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdstrategy"

oceancdstrategy.NewOceancdStrategyCanaryStepsPauseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdStrategyCanaryStepsPauseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.resetDuration">ResetDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDuration` <a name="ResetDuration" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.resetDuration"></a>

```go
func ResetDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.property.durationInput">DurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPause">OceancdStrategyCanaryStepsPause</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.property.durationInput"></a>

```go
func DurationInput() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdStrategyCanaryStepsPause
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPause">OceancdStrategyCanaryStepsPause</a>

---


### OceancdStrategyCanaryStepsSetCanaryScaleOutputReference <a name="OceancdStrategyCanaryStepsSetCanaryScaleOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdstrategy"

oceancdstrategy.NewOceancdStrategyCanaryStepsSetCanaryScaleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdStrategyCanaryStepsSetCanaryScaleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.resetMatchTrafficWeight">ResetMatchTrafficWeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.resetReplicas">ResetReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMatchTrafficWeight` <a name="ResetMatchTrafficWeight" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.resetMatchTrafficWeight"></a>

```go
func ResetMatchTrafficWeight()
```

##### `ResetReplicas` <a name="ResetReplicas" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.resetReplicas"></a>

```go
func ResetReplicas()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.resetWeight"></a>

```go
func ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.matchTrafficWeightInput">MatchTrafficWeightInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.replicasInput">ReplicasInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.matchTrafficWeight">MatchTrafficWeight</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.replicas">Replicas</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale">OceancdStrategyCanaryStepsSetCanaryScale</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchTrafficWeightInput`<sup>Optional</sup> <a name="MatchTrafficWeightInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.matchTrafficWeightInput"></a>

```go
func MatchTrafficWeightInput() interface{}
```

- *Type:* interface{}

---

##### `ReplicasInput`<sup>Optional</sup> <a name="ReplicasInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.replicasInput"></a>

```go
func ReplicasInput() *f64
```

- *Type:* *f64

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `MatchTrafficWeight`<sup>Required</sup> <a name="MatchTrafficWeight" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.matchTrafficWeight"></a>

```go
func MatchTrafficWeight() interface{}
```

- *Type:* interface{}

---

##### `Replicas`<sup>Required</sup> <a name="Replicas" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.replicas"></a>

```go
func Replicas() *f64
```

- *Type:* *f64

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdStrategyCanaryStepsSetCanaryScale
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale">OceancdStrategyCanaryStepsSetCanaryScale</a>

---


### OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference <a name="OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdstrategy"

oceancdstrategy.NewOceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.resetExact"></a>

```go
func ResetExact()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```

##### `ResetRegex` <a name="ResetRegex" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.exactInput">ExactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.regexInput">RegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.exact">Exact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.regex">Regex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue">OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.exactInput"></a>

```go
func ExactInput() *string
```

- *Type:* *string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.regexInput"></a>

```go
func RegexInput() *string
```

- *Type:* *string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.exact"></a>

```go
func Exact() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.regex"></a>

```go
func Regex() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue">OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue</a>

---


### OceancdStrategyCanaryStepsSetHeaderRouteMatchList <a name="OceancdStrategyCanaryStepsSetHeaderRouteMatchList" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdstrategy"

oceancdstrategy.NewOceancdStrategyCanaryStepsSetHeaderRouteMatchList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceancdStrategyCanaryStepsSetHeaderRouteMatchList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.get"></a>

```go
func Get(index *f64) OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference <a name="OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdstrategy"

oceancdstrategy.NewOceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.putHeaderValue">PutHeaderValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaderValue` <a name="PutHeaderValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.putHeaderValue"></a>

```go
func PutHeaderValue(value OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.putHeaderValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue">OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.headerValue">HeaderValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference">OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.headerNameInput">HeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.headerValueInput">HeaderValueInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue">OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.headerName">HeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderValue`<sup>Required</sup> <a name="HeaderValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.headerValue"></a>

```go
func HeaderValue() OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference">OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference</a>

---

##### `HeaderNameInput`<sup>Optional</sup> <a name="HeaderNameInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.headerNameInput"></a>

```go
func HeaderNameInput() *string
```

- *Type:* *string

---

##### `HeaderValueInput`<sup>Optional</sup> <a name="HeaderValueInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.headerValueInput"></a>

```go
func HeaderValueInput() OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue">OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue</a>

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.headerName"></a>

```go
func HeaderName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceancdStrategyCanaryStepsSetHeaderRouteOutputReference <a name="OceancdStrategyCanaryStepsSetHeaderRouteOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdstrategy"

oceancdstrategy.NewOceancdStrategyCanaryStepsSetHeaderRouteOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdStrategyCanaryStepsSetHeaderRouteOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.putMatch">PutMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatch` <a name="PutMatch" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.putMatch"></a>

```go
func PutMatch(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.putMatch.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.match">Match</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList">OceancdStrategyCanaryStepsSetHeaderRouteMatchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.headerRouteNameInput">HeaderRouteNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.matchInput">MatchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.headerRouteName">HeaderRouteName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute">OceancdStrategyCanaryStepsSetHeaderRoute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.match"></a>

```go
func Match() OceancdStrategyCanaryStepsSetHeaderRouteMatchList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList">OceancdStrategyCanaryStepsSetHeaderRouteMatchList</a>

---

##### `HeaderRouteNameInput`<sup>Optional</sup> <a name="HeaderRouteNameInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.headerRouteNameInput"></a>

```go
func HeaderRouteNameInput() *string
```

- *Type:* *string

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.matchInput"></a>

```go
func MatchInput() interface{}
```

- *Type:* interface{}

---

##### `HeaderRouteName`<sup>Required</sup> <a name="HeaderRouteName" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.headerRouteName"></a>

```go
func HeaderRouteName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdStrategyCanaryStepsSetHeaderRoute
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute">OceancdStrategyCanaryStepsSetHeaderRoute</a>

---


### OceancdStrategyCanaryStepsVerificationOutputReference <a name="OceancdStrategyCanaryStepsVerificationOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdstrategy"

oceancdstrategy.NewOceancdStrategyCanaryStepsVerificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdStrategyCanaryStepsVerificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.property.templateNamesInput">TemplateNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.property.templateNames">TemplateNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerification">OceancdStrategyCanaryStepsVerification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TemplateNamesInput`<sup>Optional</sup> <a name="TemplateNamesInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.property.templateNamesInput"></a>

```go
func TemplateNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TemplateNames`<sup>Required</sup> <a name="TemplateNames" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.property.templateNames"></a>

```go
func TemplateNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdStrategyCanaryStepsVerification
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerification">OceancdStrategyCanaryStepsVerification</a>

---


### OceancdStrategyRollingOutputReference <a name="OceancdStrategyRollingOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdstrategy"

oceancdstrategy.NewOceancdStrategyRollingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdStrategyRollingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.putSteps">PutSteps</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSteps` <a name="PutSteps" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.putSteps"></a>

```go
func PutSteps(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.putSteps.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.property.steps">Steps</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList">OceancdStrategyRollingStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.property.stepsInput">StepsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRolling">OceancdStrategyRolling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.property.steps"></a>

```go
func Steps() OceancdStrategyRollingStepsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList">OceancdStrategyRollingStepsList</a>

---

##### `StepsInput`<sup>Optional</sup> <a name="StepsInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.property.stepsInput"></a>

```go
func StepsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdStrategyRolling
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRolling">OceancdStrategyRolling</a>

---


### OceancdStrategyRollingStepsList <a name="OceancdStrategyRollingStepsList" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdstrategy"

oceancdstrategy.NewOceancdStrategyRollingStepsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceancdStrategyRollingStepsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.get"></a>

```go
func Get(index *f64) OceancdStrategyRollingStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceancdStrategyRollingStepsOutputReference <a name="OceancdStrategyRollingStepsOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdstrategy"

oceancdstrategy.NewOceancdStrategyRollingStepsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceancdStrategyRollingStepsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.putPause">PutPause</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.putVerification">PutVerification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.resetPause">ResetPause</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.resetStepsName">ResetStepsName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.resetVerification">ResetVerification</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPause` <a name="PutPause" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.putPause"></a>

```go
func PutPause(value OceancdStrategyRollingStepsPause)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.putPause.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPause">OceancdStrategyRollingStepsPause</a>

---

##### `PutVerification` <a name="PutVerification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.putVerification"></a>

```go
func PutVerification(value OceancdStrategyRollingStepsVerification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.putVerification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerification">OceancdStrategyRollingStepsVerification</a>

---

##### `ResetPause` <a name="ResetPause" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.resetPause"></a>

```go
func ResetPause()
```

##### `ResetStepsName` <a name="ResetStepsName" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.resetStepsName"></a>

```go
func ResetStepsName()
```

##### `ResetVerification` <a name="ResetVerification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.resetVerification"></a>

```go
func ResetVerification()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.pause">Pause</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference">OceancdStrategyRollingStepsPauseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.verification">Verification</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference">OceancdStrategyRollingStepsVerificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.pauseInput">PauseInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPause">OceancdStrategyRollingStepsPause</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.stepsNameInput">StepsNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.verificationInput">VerificationInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerification">OceancdStrategyRollingStepsVerification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.stepsName">StepsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Pause`<sup>Required</sup> <a name="Pause" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.pause"></a>

```go
func Pause() OceancdStrategyRollingStepsPauseOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference">OceancdStrategyRollingStepsPauseOutputReference</a>

---

##### `Verification`<sup>Required</sup> <a name="Verification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.verification"></a>

```go
func Verification() OceancdStrategyRollingStepsVerificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference">OceancdStrategyRollingStepsVerificationOutputReference</a>

---

##### `PauseInput`<sup>Optional</sup> <a name="PauseInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.pauseInput"></a>

```go
func PauseInput() OceancdStrategyRollingStepsPause
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPause">OceancdStrategyRollingStepsPause</a>

---

##### `StepsNameInput`<sup>Optional</sup> <a name="StepsNameInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.stepsNameInput"></a>

```go
func StepsNameInput() *string
```

- *Type:* *string

---

##### `VerificationInput`<sup>Optional</sup> <a name="VerificationInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.verificationInput"></a>

```go
func VerificationInput() OceancdStrategyRollingStepsVerification
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerification">OceancdStrategyRollingStepsVerification</a>

---

##### `StepsName`<sup>Required</sup> <a name="StepsName" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.stepsName"></a>

```go
func StepsName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceancdStrategyRollingStepsPauseOutputReference <a name="OceancdStrategyRollingStepsPauseOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdstrategy"

oceancdstrategy.NewOceancdStrategyRollingStepsPauseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdStrategyRollingStepsPauseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.resetDuration">ResetDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDuration` <a name="ResetDuration" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.resetDuration"></a>

```go
func ResetDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.property.durationInput">DurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPause">OceancdStrategyRollingStepsPause</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.property.durationInput"></a>

```go
func DurationInput() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdStrategyRollingStepsPause
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPause">OceancdStrategyRollingStepsPause</a>

---


### OceancdStrategyRollingStepsVerificationOutputReference <a name="OceancdStrategyRollingStepsVerificationOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdstrategy"

oceancdstrategy.NewOceancdStrategyRollingStepsVerificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdStrategyRollingStepsVerificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.property.templateNamesInput">TemplateNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.property.templateNames">TemplateNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerification">OceancdStrategyRollingStepsVerification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TemplateNamesInput`<sup>Optional</sup> <a name="TemplateNamesInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.property.templateNamesInput"></a>

```go
func TemplateNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TemplateNames`<sup>Required</sup> <a name="TemplateNames" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.property.templateNames"></a>

```go
func TemplateNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdStrategyRollingStepsVerification
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerification">OceancdStrategyRollingStepsVerification</a>

---



