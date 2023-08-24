# `spotinst_elastigroup_aws_beanstalk`

Refer to the Terraform Registory for docs: [`spotinst_elastigroup_aws_beanstalk`](https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk).

# `elastigroupAwsBeanstalk` Submodule <a name="`elastigroupAwsBeanstalk` Submodule" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElastigroupAwsBeanstalk <a name="ElastigroupAwsBeanstalk" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk spotinst_elastigroup_aws_beanstalk}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v10/elastigroupawsbeanstalk"

elastigroupawsbeanstalk.NewElastigroupAwsBeanstalk(scope Construct, id *string, config ElastigroupAwsBeanstalkConfig) ElastigroupAwsBeanstalk
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig">ElastigroupAwsBeanstalkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig">ElastigroupAwsBeanstalkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.putDeploymentPreferences">PutDeploymentPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.putManagedActions">PutManagedActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.putScheduledTask">PutScheduledTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetBeanstalkEnvironmentId">ResetBeanstalkEnvironmentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetBeanstalkEnvironmentName">ResetBeanstalkEnvironmentName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetDeploymentPreferences">ResetDeploymentPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetMaintenance">ResetMaintenance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetManagedActions">ResetManagedActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetScheduledTask">ResetScheduledTask</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutDeploymentPreferences` <a name="PutDeploymentPreferences" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.putDeploymentPreferences"></a>

```go
func PutDeploymentPreferences(value ElastigroupAwsBeanstalkDeploymentPreferences)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.putDeploymentPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences">ElastigroupAwsBeanstalkDeploymentPreferences</a>

---

##### `PutManagedActions` <a name="PutManagedActions" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.putManagedActions"></a>

```go
func PutManagedActions(value ElastigroupAwsBeanstalkManagedActions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.putManagedActions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActions">ElastigroupAwsBeanstalkManagedActions</a>

---

##### `PutScheduledTask` <a name="PutScheduledTask" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.putScheduledTask"></a>

```go
func PutScheduledTask(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.putScheduledTask.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBeanstalkEnvironmentId` <a name="ResetBeanstalkEnvironmentId" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetBeanstalkEnvironmentId"></a>

```go
func ResetBeanstalkEnvironmentId()
```

##### `ResetBeanstalkEnvironmentName` <a name="ResetBeanstalkEnvironmentName" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetBeanstalkEnvironmentName"></a>

```go
func ResetBeanstalkEnvironmentName()
```

##### `ResetDeploymentPreferences` <a name="ResetDeploymentPreferences" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetDeploymentPreferences"></a>

```go
func ResetDeploymentPreferences()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetId"></a>

```go
func ResetId()
```

##### `ResetMaintenance` <a name="ResetMaintenance" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetMaintenance"></a>

```go
func ResetMaintenance()
```

##### `ResetManagedActions` <a name="ResetManagedActions" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetManagedActions"></a>

```go
func ResetManagedActions()
```

##### `ResetScheduledTask` <a name="ResetScheduledTask" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.resetScheduledTask"></a>

```go
func ResetScheduledTask()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v10/elastigroupawsbeanstalk"

elastigroupawsbeanstalk.ElastigroupAwsBeanstalk_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v10/elastigroupawsbeanstalk"

elastigroupawsbeanstalk.ElastigroupAwsBeanstalk_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v10/elastigroupawsbeanstalk"

elastigroupawsbeanstalk.ElastigroupAwsBeanstalk_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.deploymentPreferences">DeploymentPreferences</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference">ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.managedActions">ManagedActions</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference">ElastigroupAwsBeanstalkManagedActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.scheduledTask">ScheduledTask</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList">ElastigroupAwsBeanstalkScheduledTaskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.beanstalkEnvironmentIdInput">BeanstalkEnvironmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.beanstalkEnvironmentNameInput">BeanstalkEnvironmentNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.deploymentPreferencesInput">DeploymentPreferencesInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences">ElastigroupAwsBeanstalkDeploymentPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.desiredCapacityInput">DesiredCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.instanceTypesSpotInput">InstanceTypesSpotInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.maintenanceInput">MaintenanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.managedActionsInput">ManagedActionsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActions">ElastigroupAwsBeanstalkManagedActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.maxSizeInput">MaxSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.minSizeInput">MinSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.productInput">ProductInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.scheduledTaskInput">ScheduledTaskInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.beanstalkEnvironmentId">BeanstalkEnvironmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.beanstalkEnvironmentName">BeanstalkEnvironmentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.desiredCapacity">DesiredCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.instanceTypesSpot">InstanceTypesSpot</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.maintenance">Maintenance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.maxSize">MaxSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.minSize">MinSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.product">Product</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DeploymentPreferences`<sup>Required</sup> <a name="DeploymentPreferences" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.deploymentPreferences"></a>

```go
func DeploymentPreferences() ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference">ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference</a>

---

##### `ManagedActions`<sup>Required</sup> <a name="ManagedActions" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.managedActions"></a>

```go
func ManagedActions() ElastigroupAwsBeanstalkManagedActionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference">ElastigroupAwsBeanstalkManagedActionsOutputReference</a>

---

##### `ScheduledTask`<sup>Required</sup> <a name="ScheduledTask" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.scheduledTask"></a>

```go
func ScheduledTask() ElastigroupAwsBeanstalkScheduledTaskList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList">ElastigroupAwsBeanstalkScheduledTaskList</a>

---

##### `BeanstalkEnvironmentIdInput`<sup>Optional</sup> <a name="BeanstalkEnvironmentIdInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.beanstalkEnvironmentIdInput"></a>

```go
func BeanstalkEnvironmentIdInput() *string
```

- *Type:* *string

---

##### `BeanstalkEnvironmentNameInput`<sup>Optional</sup> <a name="BeanstalkEnvironmentNameInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.beanstalkEnvironmentNameInput"></a>

```go
func BeanstalkEnvironmentNameInput() *string
```

- *Type:* *string

---

##### `DeploymentPreferencesInput`<sup>Optional</sup> <a name="DeploymentPreferencesInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.deploymentPreferencesInput"></a>

```go
func DeploymentPreferencesInput() ElastigroupAwsBeanstalkDeploymentPreferences
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences">ElastigroupAwsBeanstalkDeploymentPreferences</a>

---

##### `DesiredCapacityInput`<sup>Optional</sup> <a name="DesiredCapacityInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.desiredCapacityInput"></a>

```go
func DesiredCapacityInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceTypesSpotInput`<sup>Optional</sup> <a name="InstanceTypesSpotInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.instanceTypesSpotInput"></a>

```go
func InstanceTypesSpotInput() *[]*string
```

- *Type:* *[]*string

---

##### `MaintenanceInput`<sup>Optional</sup> <a name="MaintenanceInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.maintenanceInput"></a>

```go
func MaintenanceInput() *string
```

- *Type:* *string

---

##### `ManagedActionsInput`<sup>Optional</sup> <a name="ManagedActionsInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.managedActionsInput"></a>

```go
func ManagedActionsInput() ElastigroupAwsBeanstalkManagedActions
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActions">ElastigroupAwsBeanstalkManagedActions</a>

---

##### `MaxSizeInput`<sup>Optional</sup> <a name="MaxSizeInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.maxSizeInput"></a>

```go
func MaxSizeInput() *f64
```

- *Type:* *f64

---

##### `MinSizeInput`<sup>Optional</sup> <a name="MinSizeInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.minSizeInput"></a>

```go
func MinSizeInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProductInput`<sup>Optional</sup> <a name="ProductInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.productInput"></a>

```go
func ProductInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ScheduledTaskInput`<sup>Optional</sup> <a name="ScheduledTaskInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.scheduledTaskInput"></a>

```go
func ScheduledTaskInput() interface{}
```

- *Type:* interface{}

---

##### `BeanstalkEnvironmentId`<sup>Required</sup> <a name="BeanstalkEnvironmentId" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.beanstalkEnvironmentId"></a>

```go
func BeanstalkEnvironmentId() *string
```

- *Type:* *string

---

##### `BeanstalkEnvironmentName`<sup>Required</sup> <a name="BeanstalkEnvironmentName" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.beanstalkEnvironmentName"></a>

```go
func BeanstalkEnvironmentName() *string
```

- *Type:* *string

---

##### `DesiredCapacity`<sup>Required</sup> <a name="DesiredCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.desiredCapacity"></a>

```go
func DesiredCapacity() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceTypesSpot`<sup>Required</sup> <a name="InstanceTypesSpot" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.instanceTypesSpot"></a>

```go
func InstanceTypesSpot() *[]*string
```

- *Type:* *[]*string

---

##### `Maintenance`<sup>Required</sup> <a name="Maintenance" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.maintenance"></a>

```go
func Maintenance() *string
```

- *Type:* *string

---

##### `MaxSize`<sup>Required</sup> <a name="MaxSize" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.maxSize"></a>

```go
func MaxSize() *f64
```

- *Type:* *f64

---

##### `MinSize`<sup>Required</sup> <a name="MinSize" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.minSize"></a>

```go
func MinSize() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.product"></a>

```go
func Product() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalk.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ElastigroupAwsBeanstalkConfig <a name="ElastigroupAwsBeanstalkConfig" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v10/elastigroupawsbeanstalk"

&elastigroupawsbeanstalk.ElastigroupAwsBeanstalkConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DesiredCapacity: *f64,
	InstanceTypesSpot: *[]*string,
	MaxSize: *f64,
	MinSize: *f64,
	Name: *string,
	Product: *string,
	Region: *string,
	BeanstalkEnvironmentId: *string,
	BeanstalkEnvironmentName: *string,
	DeploymentPreferences: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v10.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences,
	Id: *string,
	Maintenance: *string,
	ManagedActions: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v10.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActions,
	ScheduledTask: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.desiredCapacity">DesiredCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#desired_capacity ElastigroupAwsBeanstalk#desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.instanceTypesSpot">InstanceTypesSpot</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#instance_types_spot ElastigroupAwsBeanstalk#instance_types_spot}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.maxSize">MaxSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#max_size ElastigroupAwsBeanstalk#max_size}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.minSize">MinSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#min_size ElastigroupAwsBeanstalk#min_size}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#name ElastigroupAwsBeanstalk#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.product">Product</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#product ElastigroupAwsBeanstalk#product}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#region ElastigroupAwsBeanstalk#region}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.beanstalkEnvironmentId">BeanstalkEnvironmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#beanstalk_environment_id ElastigroupAwsBeanstalk#beanstalk_environment_id}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.beanstalkEnvironmentName">BeanstalkEnvironmentName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#beanstalk_environment_name ElastigroupAwsBeanstalk#beanstalk_environment_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.deploymentPreferences">DeploymentPreferences</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences">ElastigroupAwsBeanstalkDeploymentPreferences</a></code> | deployment_preferences block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#id ElastigroupAwsBeanstalk#id}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.maintenance">Maintenance</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#maintenance ElastigroupAwsBeanstalk#maintenance}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.managedActions">ManagedActions</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActions">ElastigroupAwsBeanstalkManagedActions</a></code> | managed_actions block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.scheduledTask">ScheduledTask</a></code> | <code>interface{}</code> | scheduled_task block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DesiredCapacity`<sup>Required</sup> <a name="DesiredCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.desiredCapacity"></a>

```go
DesiredCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#desired_capacity ElastigroupAwsBeanstalk#desired_capacity}.

---

##### `InstanceTypesSpot`<sup>Required</sup> <a name="InstanceTypesSpot" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.instanceTypesSpot"></a>

```go
InstanceTypesSpot *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#instance_types_spot ElastigroupAwsBeanstalk#instance_types_spot}.

---

##### `MaxSize`<sup>Required</sup> <a name="MaxSize" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.maxSize"></a>

```go
MaxSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#max_size ElastigroupAwsBeanstalk#max_size}.

---

##### `MinSize`<sup>Required</sup> <a name="MinSize" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.minSize"></a>

```go
MinSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#min_size ElastigroupAwsBeanstalk#min_size}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#name ElastigroupAwsBeanstalk#name}.

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.product"></a>

```go
Product *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#product ElastigroupAwsBeanstalk#product}.

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#region ElastigroupAwsBeanstalk#region}.

---

##### `BeanstalkEnvironmentId`<sup>Optional</sup> <a name="BeanstalkEnvironmentId" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.beanstalkEnvironmentId"></a>

```go
BeanstalkEnvironmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#beanstalk_environment_id ElastigroupAwsBeanstalk#beanstalk_environment_id}.

---

##### `BeanstalkEnvironmentName`<sup>Optional</sup> <a name="BeanstalkEnvironmentName" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.beanstalkEnvironmentName"></a>

```go
BeanstalkEnvironmentName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#beanstalk_environment_name ElastigroupAwsBeanstalk#beanstalk_environment_name}.

---

##### `DeploymentPreferences`<sup>Optional</sup> <a name="DeploymentPreferences" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.deploymentPreferences"></a>

```go
DeploymentPreferences ElastigroupAwsBeanstalkDeploymentPreferences
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences">ElastigroupAwsBeanstalkDeploymentPreferences</a>

deployment_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#deployment_preferences ElastigroupAwsBeanstalk#deployment_preferences}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#id ElastigroupAwsBeanstalk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Maintenance`<sup>Optional</sup> <a name="Maintenance" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.maintenance"></a>

```go
Maintenance *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#maintenance ElastigroupAwsBeanstalk#maintenance}.

---

##### `ManagedActions`<sup>Optional</sup> <a name="ManagedActions" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.managedActions"></a>

```go
ManagedActions ElastigroupAwsBeanstalkManagedActions
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActions">ElastigroupAwsBeanstalkManagedActions</a>

managed_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#managed_actions ElastigroupAwsBeanstalk#managed_actions}

---

##### `ScheduledTask`<sup>Optional</sup> <a name="ScheduledTask" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkConfig.property.scheduledTask"></a>

```go
ScheduledTask interface{}
```

- *Type:* interface{}

scheduled_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#scheduled_task ElastigroupAwsBeanstalk#scheduled_task}

---

### ElastigroupAwsBeanstalkDeploymentPreferences <a name="ElastigroupAwsBeanstalkDeploymentPreferences" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v10/elastigroupawsbeanstalk"

&elastigroupawsbeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences {
	AutomaticRoll: interface{},
	BatchSizePercentage: *f64,
	GracePeriod: *f64,
	Strategy: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences.property.automaticRoll">AutomaticRoll</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#automatic_roll ElastigroupAwsBeanstalk#automatic_roll}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences.property.batchSizePercentage">BatchSizePercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#batch_size_percentage ElastigroupAwsBeanstalk#batch_size_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences.property.gracePeriod">GracePeriod</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#grace_period ElastigroupAwsBeanstalk#grace_period}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences.property.strategy">Strategy</a></code> | <code>interface{}</code> | strategy block. |

---

##### `AutomaticRoll`<sup>Optional</sup> <a name="AutomaticRoll" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences.property.automaticRoll"></a>

```go
AutomaticRoll interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#automatic_roll ElastigroupAwsBeanstalk#automatic_roll}.

---

##### `BatchSizePercentage`<sup>Optional</sup> <a name="BatchSizePercentage" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences.property.batchSizePercentage"></a>

```go
BatchSizePercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#batch_size_percentage ElastigroupAwsBeanstalk#batch_size_percentage}.

---

##### `GracePeriod`<sup>Optional</sup> <a name="GracePeriod" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences.property.gracePeriod"></a>

```go
GracePeriod *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#grace_period ElastigroupAwsBeanstalk#grace_period}.

---

##### `Strategy`<sup>Optional</sup> <a name="Strategy" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences.property.strategy"></a>

```go
Strategy interface{}
```

- *Type:* interface{}

strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#strategy ElastigroupAwsBeanstalk#strategy}

---

### ElastigroupAwsBeanstalkDeploymentPreferencesStrategy <a name="ElastigroupAwsBeanstalkDeploymentPreferencesStrategy" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v10/elastigroupawsbeanstalk"

&elastigroupawsbeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategy {
	Action: *string,
	ShouldDrainInstances: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategy.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#action ElastigroupAwsBeanstalk#action}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategy.property.shouldDrainInstances">ShouldDrainInstances</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#should_drain_instances ElastigroupAwsBeanstalk#should_drain_instances}. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategy.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#action ElastigroupAwsBeanstalk#action}.

---

##### `ShouldDrainInstances`<sup>Optional</sup> <a name="ShouldDrainInstances" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategy.property.shouldDrainInstances"></a>

```go
ShouldDrainInstances interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#should_drain_instances ElastigroupAwsBeanstalk#should_drain_instances}.

---

### ElastigroupAwsBeanstalkManagedActions <a name="ElastigroupAwsBeanstalkManagedActions" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v10/elastigroupawsbeanstalk"

&elastigroupawsbeanstalk.ElastigroupAwsBeanstalkManagedActions {
	PlatformUpdate: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v10.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActions.property.platformUpdate">PlatformUpdate</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate">ElastigroupAwsBeanstalkManagedActionsPlatformUpdate</a></code> | platform_update block. |

---

##### `PlatformUpdate`<sup>Optional</sup> <a name="PlatformUpdate" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActions.property.platformUpdate"></a>

```go
PlatformUpdate ElastigroupAwsBeanstalkManagedActionsPlatformUpdate
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate">ElastigroupAwsBeanstalkManagedActionsPlatformUpdate</a>

platform_update block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#platform_update ElastigroupAwsBeanstalk#platform_update}

---

### ElastigroupAwsBeanstalkManagedActionsPlatformUpdate <a name="ElastigroupAwsBeanstalkManagedActionsPlatformUpdate" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v10/elastigroupawsbeanstalk"

&elastigroupawsbeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate {
	PerformAt: *string,
	TimeWindow: *string,
	UpdateLevel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate.property.performAt">PerformAt</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#perform_at ElastigroupAwsBeanstalk#perform_at}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate.property.timeWindow">TimeWindow</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#time_window ElastigroupAwsBeanstalk#time_window}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate.property.updateLevel">UpdateLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#update_level ElastigroupAwsBeanstalk#update_level}. |

---

##### `PerformAt`<sup>Optional</sup> <a name="PerformAt" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate.property.performAt"></a>

```go
PerformAt *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#perform_at ElastigroupAwsBeanstalk#perform_at}.

---

##### `TimeWindow`<sup>Optional</sup> <a name="TimeWindow" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate.property.timeWindow"></a>

```go
TimeWindow *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#time_window ElastigroupAwsBeanstalk#time_window}.

---

##### `UpdateLevel`<sup>Optional</sup> <a name="UpdateLevel" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate.property.updateLevel"></a>

```go
UpdateLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#update_level ElastigroupAwsBeanstalk#update_level}.

---

### ElastigroupAwsBeanstalkScheduledTask <a name="ElastigroupAwsBeanstalkScheduledTask" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v10/elastigroupawsbeanstalk"

&elastigroupawsbeanstalk.ElastigroupAwsBeanstalkScheduledTask {
	TaskType: *string,
	Adjustment: *string,
	AdjustmentPercentage: *string,
	BatchSizePercentage: *string,
	CronExpression: *string,
	Frequency: *string,
	GracePeriod: *string,
	IsEnabled: interface{},
	MaxCapacity: *string,
	MinCapacity: *string,
	ScaleMaxCapacity: *string,
	ScaleMinCapacity: *string,
	ScaleTargetCapacity: *string,
	StartTime: *string,
	TargetCapacity: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.taskType">TaskType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#task_type ElastigroupAwsBeanstalk#task_type}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.adjustment">Adjustment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#adjustment ElastigroupAwsBeanstalk#adjustment}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.adjustmentPercentage">AdjustmentPercentage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#adjustment_percentage ElastigroupAwsBeanstalk#adjustment_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.batchSizePercentage">BatchSizePercentage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#batch_size_percentage ElastigroupAwsBeanstalk#batch_size_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.cronExpression">CronExpression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#cron_expression ElastigroupAwsBeanstalk#cron_expression}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.frequency">Frequency</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#frequency ElastigroupAwsBeanstalk#frequency}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.gracePeriod">GracePeriod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#grace_period ElastigroupAwsBeanstalk#grace_period}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#is_enabled ElastigroupAwsBeanstalk#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.maxCapacity">MaxCapacity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#max_capacity ElastigroupAwsBeanstalk#max_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.minCapacity">MinCapacity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#min_capacity ElastigroupAwsBeanstalk#min_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.scaleMaxCapacity">ScaleMaxCapacity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#scale_max_capacity ElastigroupAwsBeanstalk#scale_max_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.scaleMinCapacity">ScaleMinCapacity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#scale_min_capacity ElastigroupAwsBeanstalk#scale_min_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.scaleTargetCapacity">ScaleTargetCapacity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#scale_target_capacity ElastigroupAwsBeanstalk#scale_target_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.startTime">StartTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#start_time ElastigroupAwsBeanstalk#start_time}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.targetCapacity">TargetCapacity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#target_capacity ElastigroupAwsBeanstalk#target_capacity}. |

---

##### `TaskType`<sup>Required</sup> <a name="TaskType" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.taskType"></a>

```go
TaskType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#task_type ElastigroupAwsBeanstalk#task_type}.

---

##### `Adjustment`<sup>Optional</sup> <a name="Adjustment" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.adjustment"></a>

```go
Adjustment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#adjustment ElastigroupAwsBeanstalk#adjustment}.

---

##### `AdjustmentPercentage`<sup>Optional</sup> <a name="AdjustmentPercentage" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.adjustmentPercentage"></a>

```go
AdjustmentPercentage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#adjustment_percentage ElastigroupAwsBeanstalk#adjustment_percentage}.

---

##### `BatchSizePercentage`<sup>Optional</sup> <a name="BatchSizePercentage" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.batchSizePercentage"></a>

```go
BatchSizePercentage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#batch_size_percentage ElastigroupAwsBeanstalk#batch_size_percentage}.

---

##### `CronExpression`<sup>Optional</sup> <a name="CronExpression" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.cronExpression"></a>

```go
CronExpression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#cron_expression ElastigroupAwsBeanstalk#cron_expression}.

---

##### `Frequency`<sup>Optional</sup> <a name="Frequency" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.frequency"></a>

```go
Frequency *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#frequency ElastigroupAwsBeanstalk#frequency}.

---

##### `GracePeriod`<sup>Optional</sup> <a name="GracePeriod" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.gracePeriod"></a>

```go
GracePeriod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#grace_period ElastigroupAwsBeanstalk#grace_period}.

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#is_enabled ElastigroupAwsBeanstalk#is_enabled}.

---

##### `MaxCapacity`<sup>Optional</sup> <a name="MaxCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.maxCapacity"></a>

```go
MaxCapacity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#max_capacity ElastigroupAwsBeanstalk#max_capacity}.

---

##### `MinCapacity`<sup>Optional</sup> <a name="MinCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.minCapacity"></a>

```go
MinCapacity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#min_capacity ElastigroupAwsBeanstalk#min_capacity}.

---

##### `ScaleMaxCapacity`<sup>Optional</sup> <a name="ScaleMaxCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.scaleMaxCapacity"></a>

```go
ScaleMaxCapacity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#scale_max_capacity ElastigroupAwsBeanstalk#scale_max_capacity}.

---

##### `ScaleMinCapacity`<sup>Optional</sup> <a name="ScaleMinCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.scaleMinCapacity"></a>

```go
ScaleMinCapacity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#scale_min_capacity ElastigroupAwsBeanstalk#scale_min_capacity}.

---

##### `ScaleTargetCapacity`<sup>Optional</sup> <a name="ScaleTargetCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.scaleTargetCapacity"></a>

```go
ScaleTargetCapacity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#scale_target_capacity ElastigroupAwsBeanstalk#scale_target_capacity}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#start_time ElastigroupAwsBeanstalk#start_time}.

---

##### `TargetCapacity`<sup>Optional</sup> <a name="TargetCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTask.property.targetCapacity"></a>

```go
TargetCapacity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_aws_beanstalk#target_capacity ElastigroupAwsBeanstalk#target_capacity}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference <a name="ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v10/elastigroupawsbeanstalk"

elastigroupawsbeanstalk.NewElastigroupAwsBeanstalkDeploymentPreferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.putStrategy">PutStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.resetAutomaticRoll">ResetAutomaticRoll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.resetBatchSizePercentage">ResetBatchSizePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.resetGracePeriod">ResetGracePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.resetStrategy">ResetStrategy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStrategy` <a name="PutStrategy" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.putStrategy"></a>

```go
func PutStrategy(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.putStrategy.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAutomaticRoll` <a name="ResetAutomaticRoll" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.resetAutomaticRoll"></a>

```go
func ResetAutomaticRoll()
```

##### `ResetBatchSizePercentage` <a name="ResetBatchSizePercentage" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.resetBatchSizePercentage"></a>

```go
func ResetBatchSizePercentage()
```

##### `ResetGracePeriod` <a name="ResetGracePeriod" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.resetGracePeriod"></a>

```go
func ResetGracePeriod()
```

##### `ResetStrategy` <a name="ResetStrategy" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.resetStrategy"></a>

```go
func ResetStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.strategy">Strategy</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList">ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.automaticRollInput">AutomaticRollInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.batchSizePercentageInput">BatchSizePercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.gracePeriodInput">GracePeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.strategyInput">StrategyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.automaticRoll">AutomaticRoll</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.batchSizePercentage">BatchSizePercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.gracePeriod">GracePeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences">ElastigroupAwsBeanstalkDeploymentPreferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.strategy"></a>

```go
func Strategy() ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList">ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList</a>

---

##### `AutomaticRollInput`<sup>Optional</sup> <a name="AutomaticRollInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.automaticRollInput"></a>

```go
func AutomaticRollInput() interface{}
```

- *Type:* interface{}

---

##### `BatchSizePercentageInput`<sup>Optional</sup> <a name="BatchSizePercentageInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.batchSizePercentageInput"></a>

```go
func BatchSizePercentageInput() *f64
```

- *Type:* *f64

---

##### `GracePeriodInput`<sup>Optional</sup> <a name="GracePeriodInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.gracePeriodInput"></a>

```go
func GracePeriodInput() *f64
```

- *Type:* *f64

---

##### `StrategyInput`<sup>Optional</sup> <a name="StrategyInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.strategyInput"></a>

```go
func StrategyInput() interface{}
```

- *Type:* interface{}

---

##### `AutomaticRoll`<sup>Required</sup> <a name="AutomaticRoll" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.automaticRoll"></a>

```go
func AutomaticRoll() interface{}
```

- *Type:* interface{}

---

##### `BatchSizePercentage`<sup>Required</sup> <a name="BatchSizePercentage" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.batchSizePercentage"></a>

```go
func BatchSizePercentage() *f64
```

- *Type:* *f64

---

##### `GracePeriod`<sup>Required</sup> <a name="GracePeriod" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.gracePeriod"></a>

```go
func GracePeriod() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() ElastigroupAwsBeanstalkDeploymentPreferences
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferences">ElastigroupAwsBeanstalkDeploymentPreferences</a>

---


### ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList <a name="ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v10/elastigroupawsbeanstalk"

elastigroupawsbeanstalk.NewElastigroupAwsBeanstalkDeploymentPreferencesStrategyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.get"></a>

```go
func Get(index *f64) ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference <a name="ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v10/elastigroupawsbeanstalk"

elastigroupawsbeanstalk.NewElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.resetShouldDrainInstances">ResetShouldDrainInstances</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetShouldDrainInstances` <a name="ResetShouldDrainInstances" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.resetShouldDrainInstances"></a>

```go
func ResetShouldDrainInstances()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.property.shouldDrainInstancesInput">ShouldDrainInstancesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.property.shouldDrainInstances">ShouldDrainInstances</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `ShouldDrainInstancesInput`<sup>Optional</sup> <a name="ShouldDrainInstancesInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.property.shouldDrainInstancesInput"></a>

```go
func ShouldDrainInstancesInput() interface{}
```

- *Type:* interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `ShouldDrainInstances`<sup>Required</sup> <a name="ShouldDrainInstances" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.property.shouldDrainInstances"></a>

```go
func ShouldDrainInstances() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkDeploymentPreferencesStrategyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElastigroupAwsBeanstalkManagedActionsOutputReference <a name="ElastigroupAwsBeanstalkManagedActionsOutputReference" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v10/elastigroupawsbeanstalk"

elastigroupawsbeanstalk.NewElastigroupAwsBeanstalkManagedActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ElastigroupAwsBeanstalkManagedActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.putPlatformUpdate">PutPlatformUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.resetPlatformUpdate">ResetPlatformUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPlatformUpdate` <a name="PutPlatformUpdate" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.putPlatformUpdate"></a>

```go
func PutPlatformUpdate(value ElastigroupAwsBeanstalkManagedActionsPlatformUpdate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.putPlatformUpdate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate">ElastigroupAwsBeanstalkManagedActionsPlatformUpdate</a>

---

##### `ResetPlatformUpdate` <a name="ResetPlatformUpdate" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.resetPlatformUpdate"></a>

```go
func ResetPlatformUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.property.platformUpdate">PlatformUpdate</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference">ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.property.platformUpdateInput">PlatformUpdateInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate">ElastigroupAwsBeanstalkManagedActionsPlatformUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActions">ElastigroupAwsBeanstalkManagedActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PlatformUpdate`<sup>Required</sup> <a name="PlatformUpdate" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.property.platformUpdate"></a>

```go
func PlatformUpdate() ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference">ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference</a>

---

##### `PlatformUpdateInput`<sup>Optional</sup> <a name="PlatformUpdateInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.property.platformUpdateInput"></a>

```go
func PlatformUpdateInput() ElastigroupAwsBeanstalkManagedActionsPlatformUpdate
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate">ElastigroupAwsBeanstalkManagedActionsPlatformUpdate</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() ElastigroupAwsBeanstalkManagedActions
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActions">ElastigroupAwsBeanstalkManagedActions</a>

---


### ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference <a name="ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v10/elastigroupawsbeanstalk"

elastigroupawsbeanstalk.NewElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.resetPerformAt">ResetPerformAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.resetTimeWindow">ResetTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.resetUpdateLevel">ResetUpdateLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPerformAt` <a name="ResetPerformAt" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.resetPerformAt"></a>

```go
func ResetPerformAt()
```

##### `ResetTimeWindow` <a name="ResetTimeWindow" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.resetTimeWindow"></a>

```go
func ResetTimeWindow()
```

##### `ResetUpdateLevel` <a name="ResetUpdateLevel" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.resetUpdateLevel"></a>

```go
func ResetUpdateLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.performAtInput">PerformAtInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.timeWindowInput">TimeWindowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.updateLevelInput">UpdateLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.performAt">PerformAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.timeWindow">TimeWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.updateLevel">UpdateLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate">ElastigroupAwsBeanstalkManagedActionsPlatformUpdate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PerformAtInput`<sup>Optional</sup> <a name="PerformAtInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.performAtInput"></a>

```go
func PerformAtInput() *string
```

- *Type:* *string

---

##### `TimeWindowInput`<sup>Optional</sup> <a name="TimeWindowInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.timeWindowInput"></a>

```go
func TimeWindowInput() *string
```

- *Type:* *string

---

##### `UpdateLevelInput`<sup>Optional</sup> <a name="UpdateLevelInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.updateLevelInput"></a>

```go
func UpdateLevelInput() *string
```

- *Type:* *string

---

##### `PerformAt`<sup>Required</sup> <a name="PerformAt" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.performAt"></a>

```go
func PerformAt() *string
```

- *Type:* *string

---

##### `TimeWindow`<sup>Required</sup> <a name="TimeWindow" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.timeWindow"></a>

```go
func TimeWindow() *string
```

- *Type:* *string

---

##### `UpdateLevel`<sup>Required</sup> <a name="UpdateLevel" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.updateLevel"></a>

```go
func UpdateLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference.property.internalValue"></a>

```go
func InternalValue() ElastigroupAwsBeanstalkManagedActionsPlatformUpdate
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkManagedActionsPlatformUpdate">ElastigroupAwsBeanstalkManagedActionsPlatformUpdate</a>

---


### ElastigroupAwsBeanstalkScheduledTaskList <a name="ElastigroupAwsBeanstalkScheduledTaskList" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v10/elastigroupawsbeanstalk"

elastigroupawsbeanstalk.NewElastigroupAwsBeanstalkScheduledTaskList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ElastigroupAwsBeanstalkScheduledTaskList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.get"></a>

```go
func Get(index *f64) ElastigroupAwsBeanstalkScheduledTaskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElastigroupAwsBeanstalkScheduledTaskOutputReference <a name="ElastigroupAwsBeanstalkScheduledTaskOutputReference" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v10/elastigroupawsbeanstalk"

elastigroupawsbeanstalk.NewElastigroupAwsBeanstalkScheduledTaskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ElastigroupAwsBeanstalkScheduledTaskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetAdjustment">ResetAdjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetAdjustmentPercentage">ResetAdjustmentPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetBatchSizePercentage">ResetBatchSizePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetCronExpression">ResetCronExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetFrequency">ResetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetGracePeriod">ResetGracePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetMaxCapacity">ResetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetMinCapacity">ResetMinCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetScaleMaxCapacity">ResetScaleMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetScaleMinCapacity">ResetScaleMinCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetScaleTargetCapacity">ResetScaleTargetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetTargetCapacity">ResetTargetCapacity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdjustment` <a name="ResetAdjustment" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetAdjustment"></a>

```go
func ResetAdjustment()
```

##### `ResetAdjustmentPercentage` <a name="ResetAdjustmentPercentage" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetAdjustmentPercentage"></a>

```go
func ResetAdjustmentPercentage()
```

##### `ResetBatchSizePercentage` <a name="ResetBatchSizePercentage" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetBatchSizePercentage"></a>

```go
func ResetBatchSizePercentage()
```

##### `ResetCronExpression` <a name="ResetCronExpression" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetCronExpression"></a>

```go
func ResetCronExpression()
```

##### `ResetFrequency` <a name="ResetFrequency" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetFrequency"></a>

```go
func ResetFrequency()
```

##### `ResetGracePeriod` <a name="ResetGracePeriod" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetGracePeriod"></a>

```go
func ResetGracePeriod()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetIsEnabled"></a>

```go
func ResetIsEnabled()
```

##### `ResetMaxCapacity` <a name="ResetMaxCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetMaxCapacity"></a>

```go
func ResetMaxCapacity()
```

##### `ResetMinCapacity` <a name="ResetMinCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetMinCapacity"></a>

```go
func ResetMinCapacity()
```

##### `ResetScaleMaxCapacity` <a name="ResetScaleMaxCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetScaleMaxCapacity"></a>

```go
func ResetScaleMaxCapacity()
```

##### `ResetScaleMinCapacity` <a name="ResetScaleMinCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetScaleMinCapacity"></a>

```go
func ResetScaleMinCapacity()
```

##### `ResetScaleTargetCapacity` <a name="ResetScaleTargetCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetScaleTargetCapacity"></a>

```go
func ResetScaleTargetCapacity()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetStartTime"></a>

```go
func ResetStartTime()
```

##### `ResetTargetCapacity` <a name="ResetTargetCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.resetTargetCapacity"></a>

```go
func ResetTargetCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.adjustmentInput">AdjustmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.adjustmentPercentageInput">AdjustmentPercentageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.batchSizePercentageInput">BatchSizePercentageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.cronExpressionInput">CronExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.frequencyInput">FrequencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.gracePeriodInput">GracePeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.maxCapacityInput">MaxCapacityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.minCapacityInput">MinCapacityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.scaleMaxCapacityInput">ScaleMaxCapacityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.scaleMinCapacityInput">ScaleMinCapacityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.scaleTargetCapacityInput">ScaleTargetCapacityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.targetCapacityInput">TargetCapacityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.taskTypeInput">TaskTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.adjustment">Adjustment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.adjustmentPercentage">AdjustmentPercentage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.batchSizePercentage">BatchSizePercentage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.cronExpression">CronExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.frequency">Frequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.gracePeriod">GracePeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.maxCapacity">MaxCapacity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.minCapacity">MinCapacity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.scaleMaxCapacity">ScaleMaxCapacity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.scaleMinCapacity">ScaleMinCapacity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.scaleTargetCapacity">ScaleTargetCapacity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.targetCapacity">TargetCapacity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.taskType">TaskType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdjustmentInput`<sup>Optional</sup> <a name="AdjustmentInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.adjustmentInput"></a>

```go
func AdjustmentInput() *string
```

- *Type:* *string

---

##### `AdjustmentPercentageInput`<sup>Optional</sup> <a name="AdjustmentPercentageInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.adjustmentPercentageInput"></a>

```go
func AdjustmentPercentageInput() *string
```

- *Type:* *string

---

##### `BatchSizePercentageInput`<sup>Optional</sup> <a name="BatchSizePercentageInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.batchSizePercentageInput"></a>

```go
func BatchSizePercentageInput() *string
```

- *Type:* *string

---

##### `CronExpressionInput`<sup>Optional</sup> <a name="CronExpressionInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.cronExpressionInput"></a>

```go
func CronExpressionInput() *string
```

- *Type:* *string

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.frequencyInput"></a>

```go
func FrequencyInput() *string
```

- *Type:* *string

---

##### `GracePeriodInput`<sup>Optional</sup> <a name="GracePeriodInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.gracePeriodInput"></a>

```go
func GracePeriodInput() *string
```

- *Type:* *string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MaxCapacityInput`<sup>Optional</sup> <a name="MaxCapacityInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.maxCapacityInput"></a>

```go
func MaxCapacityInput() *string
```

- *Type:* *string

---

##### `MinCapacityInput`<sup>Optional</sup> <a name="MinCapacityInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.minCapacityInput"></a>

```go
func MinCapacityInput() *string
```

- *Type:* *string

---

##### `ScaleMaxCapacityInput`<sup>Optional</sup> <a name="ScaleMaxCapacityInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.scaleMaxCapacityInput"></a>

```go
func ScaleMaxCapacityInput() *string
```

- *Type:* *string

---

##### `ScaleMinCapacityInput`<sup>Optional</sup> <a name="ScaleMinCapacityInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.scaleMinCapacityInput"></a>

```go
func ScaleMinCapacityInput() *string
```

- *Type:* *string

---

##### `ScaleTargetCapacityInput`<sup>Optional</sup> <a name="ScaleTargetCapacityInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.scaleTargetCapacityInput"></a>

```go
func ScaleTargetCapacityInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `TargetCapacityInput`<sup>Optional</sup> <a name="TargetCapacityInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.targetCapacityInput"></a>

```go
func TargetCapacityInput() *string
```

- *Type:* *string

---

##### `TaskTypeInput`<sup>Optional</sup> <a name="TaskTypeInput" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.taskTypeInput"></a>

```go
func TaskTypeInput() *string
```

- *Type:* *string

---

##### `Adjustment`<sup>Required</sup> <a name="Adjustment" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.adjustment"></a>

```go
func Adjustment() *string
```

- *Type:* *string

---

##### `AdjustmentPercentage`<sup>Required</sup> <a name="AdjustmentPercentage" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.adjustmentPercentage"></a>

```go
func AdjustmentPercentage() *string
```

- *Type:* *string

---

##### `BatchSizePercentage`<sup>Required</sup> <a name="BatchSizePercentage" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.batchSizePercentage"></a>

```go
func BatchSizePercentage() *string
```

- *Type:* *string

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.cronExpression"></a>

```go
func CronExpression() *string
```

- *Type:* *string

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.frequency"></a>

```go
func Frequency() *string
```

- *Type:* *string

---

##### `GracePeriod`<sup>Required</sup> <a name="GracePeriod" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.gracePeriod"></a>

```go
func GracePeriod() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.maxCapacity"></a>

```go
func MaxCapacity() *string
```

- *Type:* *string

---

##### `MinCapacity`<sup>Required</sup> <a name="MinCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.minCapacity"></a>

```go
func MinCapacity() *string
```

- *Type:* *string

---

##### `ScaleMaxCapacity`<sup>Required</sup> <a name="ScaleMaxCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.scaleMaxCapacity"></a>

```go
func ScaleMaxCapacity() *string
```

- *Type:* *string

---

##### `ScaleMinCapacity`<sup>Required</sup> <a name="ScaleMinCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.scaleMinCapacity"></a>

```go
func ScaleMinCapacity() *string
```

- *Type:* *string

---

##### `ScaleTargetCapacity`<sup>Required</sup> <a name="ScaleTargetCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.scaleTargetCapacity"></a>

```go
func ScaleTargetCapacity() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `TargetCapacity`<sup>Required</sup> <a name="TargetCapacity" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.targetCapacity"></a>

```go
func TargetCapacity() *string
```

- *Type:* *string

---

##### `TaskType`<sup>Required</sup> <a name="TaskType" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.taskType"></a>

```go
func TaskType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAwsBeanstalk.ElastigroupAwsBeanstalkScheduledTaskOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



